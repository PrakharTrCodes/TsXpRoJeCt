import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import LocalImages from '../../utils/LocalImages'

export default function CustomHeader(obj: any) {

    const {topView, backText, onBackPress, helloText, signUPText, welcomeText1, welcomeText2} = obj;
    console.log('welcomeText1', welcomeText1)
  return (
    <ImageBackground style={topView} source={LocalImages.backGroundTop} >
                <TouchableOpacity>
                    <Text style={backText} onPress={onBackPress}>
                        {"❮"}
                    </Text>
                </TouchableOpacity>
                <Text style={helloText}>
                    {welcomeText1}
                </Text>
                <Text style={signUPText}>
                    {welcomeText2}
                </Text>
            </ImageBackground>
  )
}

const styles = StyleSheet.create({})