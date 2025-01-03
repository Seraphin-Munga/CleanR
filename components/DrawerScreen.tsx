import 'react-native-gesture-handler';
import React from "react";
import {Alert, Image, Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import IconE from 'react-native-vector-icons/EvilIcons';

export default function DrawerScreen() {
  const navigation = useNavigation();
  
const logout = async() =>{
  Alert.alert(
    "LOGOUT",
    "Are you sure to logout.",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: async() => {
      // navigation.navigate('Select');
       } }
    ]
  );
}

  return (
    <View style={{flex: 1,
      justifyContent: "center",
      borderTopRightRadius:20,
      borderBottomRightRadius:20}}>
      <View style={{flex:9}}>        
        <View style={{backgroundColor:'#1C1154',borderTopRightRadius:20,flex:1,
        justifyContent:'space-evenly',width:'100%',flexDirection:"row",
        alignItems:'center'}}>
        <Image source={require('./../assets/profile_imrage_1.png')} style={{width:80,height:80}}/>
          <View style={{justifyContent:'center'}}>            
            {/* <Text style={{color:'#FFF',fontWeight:'600',fontSize:16}}>User Name</Text> */}
            <TouchableOpacity style={{height:20}}>
            <Text style={{color:'#FFF',fontWeight:'700',fontSize:10}}>abc@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{padding:8,backgroundColor:'#FFF',width:'50%',borderRadius:44}}>
            <IconE name="pencil" size={22} color={'#4aa3e4'}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:2,paddingLeft:15,backgroundColor:'#FFF'}}>
        <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:'50%',alignItems:'center'}}>
        <Image source={require('./../assets/home.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{flexDirection:'row',marginTop:20,width:'80%',alignItems:'center'}}>
        <Image source={require('./../assets/booking.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>Bookings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:'80%',alignItems:'center'}}>
        <Image source={require('./../assets/complete_booking.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>Complete Bookings</Text>
          </View>
        </TouchableOpacity>   
        
        <TouchableOpacity  style={{flexDirection:'row',marginTop:20,width:'80%',alignItems:'center'}}>
        <Image source={require('./../assets/change_password.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:'80%',alignItems:'center'}}>
        <Image source={require('./../assets/menu_user.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>About Us</Text>
          </View>
        </TouchableOpacity> 
        <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:'80%',alignItems:'center'}}>
        <Image source={require('./../assets/menu_support.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>Help & Support</Text>
          </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>logout()} style={{flexDirection:'row',marginTop:20,width:'80%',alignItems:'center'}}>
        <Image source={require('./../assets/logout.png')} style={{width:24,height:24}}/>
          <View style={{justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'#222B45',fontSize:16}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>    
    </View>
  );
};