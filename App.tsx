import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SelectAccount from './app/account/SelectAccount';
import Login from './app/account/Login';
import Register from 'app/account/Register';




const Stack = createStackNavigator<any>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={"Onboarding"} component={OboardingScreen} /> */}
        <Stack.Screen name={"Select"} component={SelectAccount} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Register"} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


