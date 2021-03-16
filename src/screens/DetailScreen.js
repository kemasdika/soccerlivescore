import React from 'react'
import {View, Text, StyleSheet,Dimensions,SafeAreaView, StatusBar, ScrollView,ImageBackground } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
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
const windowWidth = Dimensions.get('window').width;
import { AntDesign } from '@expo/vector-icons';

export const DetailScreen = ({navigation}) => {
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
    const gotoBack = () => {
        navigation.navigate('Finished')
      }
    return (
        <View style={styles.center}>
           <StatusBar barStyle="light-content"></StatusBar>
            <SafeAreaView>
                <ImageBackground source={require('../../assets/bg1.jpg')} style={styles.image}>
                <View style={styles.header}>
                    <AntDesign name="arrowleft" size={24} color="#FEA443" onPress={gotoBack}/>
                    <Text style={styles.headerText}>DETAIL MATCH</Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content style={{alignItems:'center'}}>
                        <Title style={{ fontFamily:'Teko_400Regular'}}>14/30/2021</Title>
                        <Paragraph style={{ fontFamily:'Teko_400Regular', fontSize:20, paddingTop:5}}>UCL</Paragraph>
                        <View style={{flexDirection:'row', paddingBottom:(windowWidth/50)}}>
                            <View style={{marginRight:(windowWidth/10), marginTop:(-windowWidth/20), alignItems:'center'}}>
                                <Avatar.Image size={windowWidth/5} source={{uri :'https://picsum.photos/700'}} />
                                <Paragraph style={{fontFamily:'Montserrat_400Regular'}}>Barcelona</Paragraph>
                            </View>
                            <Paragraph style={{fontSize:40,paddingTop:40,fontFamily:'Teko_700Bold'}}>1 - 1</Paragraph>
                            <View style={{marginLeft:(windowWidth/10), marginTop:(-windowWidth/20), alignItems:'center'}}>
                                <Avatar.Image size={windowWidth/5}  source={{uri :'https://picsum.photos/700'}} />
                                <Paragraph style={{fontFamily:'Montserrat_400Regular'}}>Real Madrid</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content style={{alignItems:'center'}}>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Ball Position</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Attack</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Dangerous Attack</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Shot Of Goal</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Corner Kick</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Penalty</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Shot On Goal</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Yellow Card</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>Red Card</Paragraph>
                            <Paragraph style={styles.cardTextStatictic}>0</Paragraph>
                        </View>
                    </Card.Content>
                </Card>
                </ImageBackground>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,      
      alignItems: "center",
    },
    image: {
        flex: 1,
        width:windowWidth,
        alignItems:'center',
        resizeMode:'cover' 
    },
    header: {
        width:windowWidth-50,
        flexDirection:'row',
        alignItems:'flex-start',
        marginTop:(windowWidth/20),
        marginBottom:(windowWidth/20),
    },
    headerText: {
        marginStart:windowWidth/4,
        fontFamily: 'Teko_600SemiBold',
        fontSize:25,
        color: '#F2F2F2'
    },
    card: {
        width:(windowWidth-30),
        marginTop:(windowWidth/20),
        backgroundColor:'rgba(242, 242, 242, 0.9)',
        elevation:0,
        borderRadius:10
    },
    cardTextStatictic:{ 
        fontFamily:'Montserrat_600SemiBold', 
        fontSize:12, 
        paddingTop:5
    },
    cardTextContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth-70
    }
  });
