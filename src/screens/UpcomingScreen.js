import React,{useEffect} from 'react'
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
import {fetchUpcoming} from '../store/actions/UpcomingAction'
import {useSelector, useDispatch} from 'react-redux'
const windowWidth = Dimensions.get('window').width;

export const UpcomingScreen = () => {
    const {upcoming, isLoading} = useSelector((state) => state.upcoming)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUpcoming())
    },[])

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
            { isLoading ? 
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Loading ...</Text>
                </View>
                :
                <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.image}>
                <Text style={styles.header}>UPCOMING MATCH</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            upcoming.map(item => {
                                return <UpcomingCard key={item.gameId} item={item}/>
                            })
                        }
                    </ScrollView>
                </ImageBackground>
            }
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
