import React from 'react'
import {View, StyleSheet,Dimensions } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
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

export const UpcomingCard = () => {
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
        <Card style={styles.card}>
            <Card.Content style={{alignItems:'center'}}>
                <Title style={{ fontFamily:'Teko_400Regular'}}>14/30/2021</Title>
                <Paragraph style={{ fontFamily:'Teko_400Regular', fontSize:20, paddingTop:5}}>UCL</Paragraph>
                <View style={{flexDirection:'row', paddingBottom:(windowWidth/50)}}>
                    <View style={{marginRight:(windowWidth/10), marginTop:(-windowWidth/20), alignItems:'center'}}>
                        <Avatar.Image size={windowWidth/5} source={{uri :'https://picsum.photos/700'}} />
                        <Paragraph style={{fontFamily:'Montserrat_600SemiBold'}}>Barcelona</Paragraph>
                    </View>
                    <Paragraph style={{fontSize:50,paddingTop:40,fontFamily:'Montserrat_600SemiBold'}}>VS</Paragraph>
                    <View style={{marginLeft:(windowWidth/10), marginTop:(-windowWidth/20), alignItems:'center'}}>
                        <Avatar.Image size={windowWidth/5}  source={{uri :'https://picsum.photos/700'}} />
                        <Paragraph style={{fontFamily:'Montserrat_600SemiBold'}}>Real Madrid</Paragraph>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        width:(windowWidth-30),
        marginTop:(windowWidth/20),
        backgroundColor:'rgba(242, 242, 242, 0.9)',
        elevation:0,
        borderRadius:10
    },
  });