import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';


type RouteParams = {
  user_type: number;
};

type NavigationProps = {
  navigate: (screen: string, params?: any) => void;
};

export default function VerifyCode(): JSX.Element {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const navigation = useNavigation<NavigationProps>();

  const [userType, setUserType] = useState<number>(route.params.user_type);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [category, setCategory] = useState<any>();

  const otpInputs = useRef<TextInput[]>([]);

  const handleOtpChange = (value: string, index: number): void => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move to next input if not the last
      if (index < 5) {
        otpInputs.current[index + 1].focus();
      } else {
        Keyboard.dismiss();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleOtpKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const signins = async (): Promise<void> => {
    const enteredOtp = otp.join('');
    // TODO: Validate OTP
    console.log('Entered OTP:', enteredOtp);
    if (route.params.user_type === 1) {
      navigation.navigate('Home', { CategoryData: category });
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          height: Dimensions.get('window').height * 0.3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../assets/login.png')}
          style={{ width: 300, height: 120 }}
        />
      </View>
      <View style={{ height: 90, justifyContent: 'flex-start', width: '90%' }}>
        <Text style={{ color: '#1C1154', fontSize: 30, fontWeight: '700' }}>
          Enter OTP
        </Text>
        <Text style={{ color: '#282828', marginTop: 8 }}>
          Enter the 6-digit code sent to your registered number/email.
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) otpInputs.current[index] = ref;
            }}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            onKeyPress={(e) => handleOtpKeyPress(e, index)}
            returnKeyType="done"
          />
        ))}
      </View>

      <View
        style={{
          height: 100,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
      >
        <TouchableOpacity style={styles.signview} onPress={signins}>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: '700' }}>
            Verify OTP
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 25,
        }}
      >
        <Text style={styles.signup}>Didn't receive the OTP?</Text>
        <TouchableOpacity onPress={() => { /* Implement resend OTP functionality */ }}>
          <Text style={{ color: '#00BAF5', fontSize: 18, fontWeight: '600' }}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderColor: '#00BAF5',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
  signup: {
    color: '#282828',
    fontSize: 18,
    fontWeight: '700',
  },
  signview: {
    width: '95%',
    backgroundColor: '#00BAF5',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
