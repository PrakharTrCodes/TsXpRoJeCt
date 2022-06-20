import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

interface inputType {
    placeholder : string,
    placeholderTextColor : string,
    onChangeText : Function,
    value : string,
    style : any
}

const CustomInput=(props : inputType)=> {
    const {placeholder, placeholderTextColor, onChangeText, value, style } = props
  return (
      <TextInput
      style = {style}
      placeholder = {placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      />
  )
}
 export default CustomInput;
const styles = StyleSheet.create({})