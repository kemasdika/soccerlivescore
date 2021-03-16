import React from 'react'
import {View, StyleSheet,Dimensions } from "react-native";
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

export const FinishedCard = ({navigation,item}) => {
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
    const gotoDetail = () => {
        navigation.navigate('Detail',{id:item.gameId})
      }
    return (
        <Card style={styles.card}>
            <Card.Content style={{alignItems:'center'}}>
            <Title style={{ fontFamily:'Teko_400Regular', marginTop:(-windowWidth/40)}}>{item.matchTime}</Title>
            <Paragraph style={{ fontFamily:'Teko_400Regular', fontSize:15, paddingTop:0}}>{item.eventName}</Paragraph>
                <View style={{flexDirection:'row', paddingBottom:(windowWidth/50),justifyContent:'space-between',width:windowWidth-80}}>
                    <View style={{ marginTop:(-windowWidth/50), alignItems:'center',width:100}}>
                        <Avatar.Image size={windowWidth/5} source={{uri : item.homeTeamEvent.logoUrl}} style={{backgroundColor:'#FFFFFF'}}/>
                        <Paragraph style={{fontFamily:'Montserrat_400Regular',fontSize:12,textAlign:'center'}}>{item.homeTeamEvent.name}</Paragraph>
                    </View>
                    <Paragraph style={{fontSize:30,paddingTop:30,fontFamily:'Teko_700Bold'}}>{item.homeTeamEvent.score}-{item.awayTeamEvent.score}</Paragraph>
                    <View style={{ marginTop:(-windowWidth/50), alignItems:'center',width:100}}>
                        <Avatar.Image size={windowWidth/5}  source={{uri : item.awayTeamEvent.logoUrl}} style={{backgroundColor:'#FFFFFF'}} />
                        <Paragraph style={{fontFamily:'Montserrat_400Regular',fontSize:12,fontSize:12,textAlign:'center'}}>{item.awayTeamEvent.name}</Paragraph>
                    </View>
                </View>
            </Card.Content>
            <Card.Actions style={{justifyContent:'center'}}>
            <Button color='#812F33' labelStyle={{fontSize:10}} onPress={gotoDetail}>Detail Match</Button>
            </Card.Actions>
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