import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingScreen from '../../modules/LandingScreen/landingScreen';
import Login from '../../modules/Login/login';
import SignUP from '../../modules/signUp/SignUp';


export default function StackScreen() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} >
        <Stack.Screen name = 'LandingScreen' component={LandingScreen} />
        <Stack.Screen name = 'Login' component={Login} />
        <Stack.Screen name = 'SignUp' component={SignUP} />
    </Stack.Navigator>
  )
}