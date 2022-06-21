import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader/customHeader'
import { normalize } from '../../utils/Dimensions'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../components/customInput/CustomInput'

export default function ForgotPassword(obj: any) {
    const navigation: any = useNavigation();
    const [arr, setArr] = React.useState(['', '', '', ''])

    const onBackPress = () => {
        navigation.goBack()
    }


    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <CustomHeader
                welcomeText1={"Forgot"}
                welcomeText2={"Password"}
                topView={styles.topView}
                backText={styles.backText}
                onBackPress={onBackPress}
                helloText={styles.helloText}
                signUPText={styles.signUPText}
            />
            <View style={{ height: normalize(52), width: normalize(233), marginTop: normalize(10), marginLeft: normalize(16) }}>
                <Text style={{ fontSize: 16, fontFamily: 'Ubuntu', color: 'white', letterSpacing: 0.19, lineHeight: 26 }}>
                    {"Enter code sent on your  mobile number +1-4047957238"}
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {arr.map((item, i) => <CustomInput
                    style={styles.nameInput}
                    placeholder=""
                    value={arr[i]}
                    placeholderTextColor="white"
                    onChangeText={(text: string) => {
                        arr[i] = text
                        setArr([])
                    }}
                />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topView: {
        height: normalize(238),
    },
    backText: {
        zIndex: 1,
        top: normalize(57.5),
        left: normalize(16),
        fontSize: normalize(30),
        color: 'white',
        position: 'absolute',
    },
    helloText: {
        zIndex: 1,
        fontSize: normalize(40),
        top: normalize(96),
        left: normalize(16),
        color: 'white',
        position: 'absolute',
        fontFamily: 'Ubuntu-Medium'
    },
    signUPText: {
        top: normalize(140),
        left: normalize(16),
        zIndex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: normalize(40)

    },
    nameInput: {
        backgroundColor: 'red',
        margin: 10
    }
})