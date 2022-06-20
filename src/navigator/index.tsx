import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackScreen from './stack/StackScreen'

export default function index() {
  return (
    <NavigationContainer>
      <StackScreen/>
    </NavigationContainer>
  )
}