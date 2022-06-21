import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import LocalImages from '../../utils/LocalImages'
import validation from '../../utils/commonFunctions'
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { normalize } from '../../utils/Dimensions'
import CustomButton from '../../components/customButton/customButton'
import { NavigationRouteContext, useNavigation } from '@react-navigation/native'
import CustomHeader from '../../components/customHeader/customHeader'
import LinearGradient from 'react-native-linear-gradient'

interface userDetails {
    name: string,
    moileNumber: string,
    email: string,
    userName: string | number,
    password: string
}

const SignUP = () => {
    const [userDet, setUserDets] = useState({
        name: '',
        moileNumber: '',
        email: '',
        userName: '',
        password: ''
    })
    const [checked, setChecked] = useState(false);

    const navigation = useNavigation()

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <ScrollView bounces={false} style={styles.mainView}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <CustomHeader
                welcomeText1={"Hello,"}
                welcomeText2={"Sign Up"}
                topView={styles.topView}
                backText={styles.backText}
                onBackPress={onBackPress}
                helloText={styles.helloText}
                signUPText={styles.signUPText}
            />
            <CustomInput
                style={styles.nameInput}
                placeholder="Name"
                value={userDet.name}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUserDets({ ...userDet, name: text })
                }}
            />
            {userDet.name !== '' && !validation({
                caseName: 'ValidateName',
                name: userDet.name,
                email: '',
                password: '',
                userName: '',
                mobileNumber: ''
            }) && <Text
                style={styles.errorText}
            >
                    {"Enter Full Name"}
                </Text>}
            <CustomInput
                style={styles.nameInput}
                placeholder="Mobile Number"
                value={userDet.moileNumber}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUserDets({ ...userDet, moileNumber: text })
                }}
            />
            {userDet.moileNumber !== '' && !validation({
                caseName: 'ValidateMobileNumber',
                name: '',
                email: '',
                password: '',
                userName: '',
                mobileNumber: userDet.moileNumber
            }) && <Text style={styles.errorText}>
                    {"Enter correct mobile number"}
                </Text>}
            <CustomInput
                style={styles.nameInput}
                placeholder="Email Address"
                value={userDet.email}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUserDets({ ...userDet, email: text })
                }}
            />
            {userDet.email !== '' && !validation({
                caseName: 'ValidateEmail',
                name: '',
                email: userDet.email,
                password: '',
                userName: '',
                mobileNumber: ''
            }) && <Text style={styles.errorText}>
                    {"The email format is wrong"}
                </Text>}
            <CustomInput
                style={styles.nameInput}
                placeholder="User Name"
                value={userDet.userName}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUserDets({ ...userDet, userName: text })
                }}
            />
            {userDet.userName !== '' && !validation({
                caseName: 'ValidateUserName',
                name: '',
                email: '',
                password: '',
                userName: userDet.userName,
                mobileNumber: ''
            }) && <Text style={styles.errorText}>
                    {"Invalid Username"}
                </Text>}
            <CustomInput
                style={styles.nameInput}
                placeholder="Password"
                value={userDet.password}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUserDets({ ...userDet, password: text })
                }}
            />
            {userDet.password !== '' && !validation({
                caseName: 'ValidatePassword',
                name: '',
                email: '',
                password: userDet.password,
                userName: '',
                mobileNumber: ''
            }) && <Text style={styles.errorText}>
                    {"Enter valid password"}
                </Text>}
            <View style={styles.checkBoxView}>
                <TouchableOpacity onPress={() => { setChecked(!checked) }}>
                    <Image source={checked ? LocalImages.checkBoxChecked : LocalImages.checkBox} />
                </TouchableOpacity>
                <Text style={styles.conditionText} >
                    {"I agree to "}
                    <Text style={styles.termText}>
                        {"Terms and Conditions"}
                    </Text>
                </Text>
            </View>
            <LinearGradient colors={['#E91E63', '#9C27B0']} style={styles.buttonStyle} start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}>
                <CustomButton onPress={() => { }} buttonName='SignUp' buttonStyle={styles.buttonStyle} disabled={checked} />
            </LinearGradient>
            <Text style={styles.orText}>
                {"or"}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <CustomButton
                    onPress={() => { }}
                    disabled={true}
                    buttonName='FaceBook Login'
                    buttonStyle={styles.fbButtonStyle}
                />
            </View>
        </ScrollView>
    )
}
export default SignUP;


const styles = StyleSheet.create({
    helloText: {
        zIndex: 1,
        fontSize: normalize(20),
        top: normalize(106),
        left: normalize(16),
        color: 'white',
        position: 'absolute',
        fontWeight: 'bold',
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
    mainView: {
        flex: 1,
        backgroundColor: 'black',
    },
    topView: {
        height: normalize(238),
    },
    nameInput: {
        fontFamily: 'Ubuntu-Medium',
        color: 'white',
        borderColor: 'rgba(18, 40, 87, 0.75)',
        borderWidth: normalize(2),
        fontSize: normalize(16),
        top: normalize(30),
        // width :normalize(343),
        marginHorizontal: normalize(16),
        height: normalize(56),
        backgroundColor: 'rgb(33, 61, 121)',
        // alignSelf : 'center' ,
        marginTop: normalize(28),
        paddingHorizontal: normalize(32),
        borderRadius: normalize(100)
    },
    checkBoxView: {
        marginTop: normalize(50),
        marginLeft: normalize(24),
        flexDirection: 'row'
    },
    conditionText: {
        color: 'white',
        alignSelf: 'center',
        marginLeft: normalize(16),
    },
    buttonStyle: {
        backgroundColor: 'rgb(156, 39, 176)',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(20),
        marginTop: normalize(30),
        height: normalize(50),
        borderRadius: normalize(100)
    },
    orText:
    {
        marginTop: normalize(48),
        color: "white",
        fontSize: normalize(16),
        textAlign: 'center'
    },
    fbButtonStyle: {

    },
    errorText: {
        color: 'white',
        top: normalize(35),
        left: normalize(20)
    },
    backText: {
        zIndex: 1,
        top: normalize(57.5),
        left: normalize(16),
        fontSize: normalize(30),
        color: 'white',
        position: 'absolute',
        fontWeight: 'bold'
    },
    termText: {
        textDecorationLine: 'underline',
    }

})