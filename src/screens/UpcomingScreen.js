import React from 'react'
import {View, Text, StyleSheet,Dimensions,SafeAreaView, StatusBar, ScrollView,ImageBackground } from "react-native";
import { 
    useFonts,
    Teko_400Regular,
    Teko_600SemiBold,
    Teko_700Bold 
  } from '@expo-google-fonts/teko'
import { 
    Montserrat_400Regular,
    Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import AppLoading  from 'expo-app-loading'
import {UpcomingCard} from '../components/UpcomingCard'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const UpcomingScreen = () => {
    let [fontsLoaded] = useFonts({
        Teko_400Regular,
        Teko_600SemiBold,
        Teko_700Bold,
        Montserrat_400Regular,
        Montserrat_600SemiBold,
      });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={styles.center}>
            <StatusBar barStyle="light-content"></StatusBar>
            <SafeAreaView>
                    <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.image}>
                    <Text style={styles.header}>UPCOMING MATCH</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <UpcomingCard/>
                            <UpcomingCard/>
                            <UpcomingCard/>
                            <UpcomingCard/>
                            <UpcomingCard/>
                        </ScrollView>
                    </ImageBackground>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      alignItems:'center'
    },
    image: {
        flex: 1,
        width:windowWidth,
        alignItems:'center',
        resizeMode:'cover' 
    },
    header: {
        fontFamily: 'Teko_600SemiBold',
        fontSize:25,
        marginTop:(windowWidth/20),
        marginBottom:(windowWidth/20),
        color: '#F2F2F2'
    },
  });
