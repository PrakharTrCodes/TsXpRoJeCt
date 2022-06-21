import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/customButton/customButton';
import CustomHeader from '../../components/customHeader/customHeader';
import CustomInput from '../../components/customInput/CustomInput';
import { normalize } from '../../utils/Dimensions';


const Login = () => {

    const [user, setUser] = React.useState({
        email: "",
        password: ''
    })

    const navigation :any = useNavigation()

    const onBackPress = () => {
        navigation.goBack()
    }


    return (
        <ScrollView bounces={false} style={styles.mainView}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <CustomHeader
                welcomeText1={'Welcome Back'}
                welcomeText2={'Log In'}
                topView={styles.topView}
                backText={styles.backText}
                onBackPress={onBackPress}
                helloText={styles.helloText}
                signUPText={styles.signUPText}
            />
            <CustomInput
                style={styles.Input}
                placeholder="Mobile Number/ Email"
                value={user.email}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUser({ ...user, email: text })
                }}
            />
            <CustomInput
                secureTextEntry = {true}
                style={styles.Input}
                placeholder="Password?"
                value={user.password}
                placeholderTextColor="white"
                onChangeText={(text: string) => {
                    setUser({ ...user, password: text })
                }}
            />
            <Text onPress={()=>{navigation.navigate('ForgotPass')}} style={styles.forgot}>
                {'Forgot Password ?'}
            </Text>
            <LinearGradient colors={['#E91E63', '#9C27B0']} style={styles.buttonStyle} start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}>
            <CustomButton onPress = {()=>{}} buttonName='Login' buttonStyle={styles.buttonStyle} disabled={false} />
            </LinearGradient>
        </ScrollView>
    )
}
export default Login;

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
        fontWeight: 'bold'
    },
    helloText: {
        zIndex: 1,
        fontSize: normalize(20),
        top: normalize(106),
        left: normalize(16),
        color: 'white',
        position: 'absolute',
        fontWeight: 'bold',
        fontFamily:'Ubuntu-Medium'
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
    Input: {
        fontFamily:'Ubuntu-Medium',
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
    forgot: {
        fontFamily:'Ubuntu-Medium',
        color: 'white',
        marginTop: normalize(48),
        textAlign: 'right',
        marginRight: normalize(16)
    },
    buttonStyle: {
        backgroundColor: 'rgb(156, 39, 176)',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(20),
        marginTop: normalize(30),
        height: normalize(50),
        borderRadius: normalize(100)
    }
})