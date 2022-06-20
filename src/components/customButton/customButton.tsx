import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { normalize } from '../../utils/Dimensions';

interface Button{
    buttonName : string | null,
    buttonStyle : any,
    disabled : boolean,
    onPress : Function
}


export default function CustomButton(props : Button) {

    const {buttonName, buttonStyle, disabled, onPress} = props;

  return (
    <TouchableOpacity style = {styles.buttonPress} onPress={()=>{onPress()}} disabled={disabled} >
        <Text style ={styles.buttonText}>
            {buttonName}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText : {
    fontSize:normalize(16),
    color: "white",
  },
  buttonPress : {
    height:'100%', 
    width : '100%', 
    justifyContent:'center', 
    alignItems:'center'
  }
})