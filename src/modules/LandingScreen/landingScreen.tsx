import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList, } from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import LocalImages from '../../utils/LocalImages';
import { normalize } from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/customButton/customButton';

export default function LandingScreen() {
    const navigation: any = useNavigation();
    const imgArr = [{ img: LocalImages.backGround1, title: 'Create your story' }, { img: LocalImages.backGround2, title: 'Share your story' }, { img: LocalImages.backGround3, title: "Follow your story" }];
    const [index, setIndex] = React.useState(0);

    const _renderItem = ({ index }: any) => {
        return (
            <View style={styles.imageView}>
                <Image resizeMode='cover' style={styles.image} source={imgArr[index].img} />
            </View>
        )
    }


    return (
        <ScrollView style={{ backgroundColor: 'black', flex: 1 }} bounces={false}>
            <FlatList
                bounces={false}
                pagingEnabled
                horizontal
                data={imgArr}
                renderItem={_renderItem}
                keyExtractor={item => Math.random().toString()}
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(
                        event.nativeEvent.contentOffset.x /
                        event.nativeEvent.layoutMeasurement.width
                    );
                    setIndex(index)
                }}
            />
            <Image source={LocalImages.logo} style={styles.logo} />
            <Text style={styles.upperText}>
                {'KandiSnap'}
            </Text>
            <Text style={styles.lowerText}>
                {imgArr[index].title}
            </Text>
            <View style={styles.indicator}>
                {imgArr.map((item, i) => {
                    return i == index ? (<LinearGradient style={styles.indicatorFill} colors={['#E91E63', '#9C27B0']}>
                    </LinearGradient>) : <View style={{ ...styles.indicatorFill, backgroundColor: 'grey' }}>
                    </View>
                })}

            </View>
            <LinearGradient colors={['#E91E63', '#9C27B0']} style={styles.buttonStyle} start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}>
                <CustomButton onPress={() => { }} buttonName='Discover a Kandi' buttonStyle={styles.buttonStyle} disabled={false} />
            </LinearGradient>
            <View style={styles.buttonsView}>
                <View style={styles.loginButton}>
                    <CustomButton onPress={() => { navigation.navigate('Login') }} buttonName='Login' buttonStyle={styles.loginButton} disabled={false} />
                </View>
                <View style={styles.loginButton} >
                    <CustomButton onPress={() => { navigation.navigate("SignUp") }} buttonName='SignUp' buttonStyle={styles.signUpButton} disabled={false} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(20),
        marginTop: normalize(109),
        height: normalize(50),
        borderRadius: normalize(100),
    },
    loginButton: {
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: normalize(100),
        width: normalize(156),
        height: normalize(54),
        borderWidth: 1
    },
    signUpButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: normalize(100),
        width: normalize(156),
        height: normalize(54)
    },
    logo: {
        position: 'absolute',
        marginTop: normalize(362),
        marginLeft: normalize(20)
    },
    upperText: {
        color: 'white',
        fontSize: normalize(32),
        position: 'absolute',
        top: normalize(457),
        fontFamily: "Ubuntu-Bold"
    },
    lowerText: {
        color: 'white',
        fontSize: normalize(16),
        position: 'absolute',
        top: normalize(500),
        fontFamily: 'Ubuntu'
    },
    indicator: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: normalize(545),
        position: 'absolute',
        marginRight: normalize(20),
        width: normalize(60)
    },
    indicatorFill: {
        borderRadius: 1000,
        width: normalize(10),
        height: normalize(10)
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: normalize(13)
    },
    imageView: {
        width: normalize(375),
        height: normalize(477)
    },
    image: {
        height: "100%",
        width: '100%'
    }
})