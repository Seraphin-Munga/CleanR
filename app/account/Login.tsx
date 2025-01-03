import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import { Link } from 'expo-router';


type RouteParams = {
  user_type: number;
};

type NavigationProps = {
  navigate: (screen: string, params?: any) => void;
};

export default function Login(): JSX.Element {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const navigation = useNavigation<NavigationProps>();


  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [userType, setUserType] = useState<number>(route.params.user_type);
  const [code, setCode] = useState<string>('kleenapp12345');
  const [deviceType, setDeviceType] = useState<string>('android');
  const [fbUserName, setFbUserName] = useState<string | undefined>();
  const [fbUserID, setFbUserID] = useState<string | undefined>();
//   const [devicesToken, setDevicesToken] = useState<string | undefined>(
//     global.device_token
//   );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [category, setCategory] = useState<any>();

  const signins = async (): Promise<void> => {
    if (route.params.user_type === 1) {
      navigation.navigate('Home', { CategoryData: category });
    } else {
      navigation.navigate('Home');
    }
  };

  const signIn = async (): Promise<void> => {
 
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
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
          Account Log In
        </Text>
        <Text style={{ color: '#282828', marginTop: 8 }}>
          Enter your registered phone number or email Id to Login.
        </Text>
      </View>
      <View style={{ width: '95%', marginTop: 10 }}>
        <Text style={{ color: '#000' }}>Email</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          borderRadius: 5,
          borderColor: '#00BAF5',
          borderWidth: 1,
          width: '95%',
          alignItems: 'center',
          paddingStart: 5,
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          onChangeText={setEmail}
          value={email}
          style={{ width: '90%', color: '#000', height: 40 }}
        />
        <IconE name="mail" size={22} color="#00BAF5" />
      </View>
      <View style={{ width: '95%', marginTop: 10 }}>
        <Text style={{ color: '#000' }}>Password</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#00BAF5',
          borderWidth: 1,
          width: '95%',
          marginTop: 16,
          paddingStart: 5,
        }}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor="#A9A9A9"
          style={{ width: '90%', color: '#000' , height: 40}}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          {showPassword ? (
            <IconI name="eye-off-sharp" size={22} color="#00BAF5" />
          ) : (
            <IconAD name="eye" size={22} color="#00BAF5" />
          )}
        </TouchableOpacity>
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
          <Link href={'/Home'} >
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: '700' }}>
            Login
          </Text>
          </Link>
      
        </TouchableOpacity>
      </View>

      <View style={{height:30,alignItems:'center',justifyContent:'center',
      flexDirection:'row',marginTop:25}}>
        <Text style={styles.signup}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register',{user_type:userType})}><Text style={{color:'#00BAF5',fontSize:18,
    fontWeight:'600'}}> Register</Text></TouchableOpacity>
      </View> 
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      padding:5
    },
    padview1:{
      alignItems:'flex-end'    
    },
    padview2:{
      alignItems:'flex-end',
    },
    padview3:{
      alignItems:'flex-end',
    },
    midtext:{
      width:'75%',
      justifyContent:'flex-start'
    },
    emailtext:{
      justifyContent:'flex-start',
      width:'100%',
      fontSize:12,
      fontWeight:"900"
    },
    padview:{
      width:'80%',
    },
    logo: {
      fontSize: 18,
      color: '#A9A9A9',
      textAlign:'right'
    },
    logo1: {
      fontSize: 15,
      color: 'black',
      textAlign:'right'
    },
    forgot: {
      color: '#00BAF5',    
      fontSize:16,
      fontWeight:'600'
    },
    login: {
      color: 'black',
      backgroundColor: 'rgba(39, 39, 39, 1)',
      width: "95%"    
    },
    signup: {
      color: '#282828',
      fontSize:18,
      fontWeight:'700'
    },
    signview:{
      width:'95%',
      backgroundColor:'#00BAF5',
      height:60,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,    
    }
  });

