import React,{useEffect} from 'react'
import {View, Text, StyleSheet,Dimensions,SafeAreaView, StatusBar, ImageBackground } from "react-native";
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
import { AntDesign } from '@expo/vector-icons';
import { fetchDetail } from '../store/actions/FinishedAction'
import {fetchUpcoming} from '../store/actions/UpcomingAction'
import {useSelector, useDispatch} from 'react-redux'
const windowWidth = Dimensions.get('window').width;

export const DetailScreen = ({navigation,route}) => {
    const {id} = route.params;
    const {detail, isLoading} = useSelector((state) => state.finished)
    // console.log(id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDetail(id))
    },[])
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
    const gotoBack = () => {
        navigation.navigate('Finished')
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
                <View style={styles.header}>
                    <AntDesign name="arrowleft" size={24} color="#FEA443" onPress={gotoBack}/>
                    <Text style={styles.headerText}>DETAIL MATCH</Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content style={{alignItems:'center'}}>
                    <Title style={{ fontFamily:'Teko_400Regular', marginTop:(-windowWidth/40)}}>{detail.info.matchTimes}</Title>
                    <Paragraph style={{ fontFamily:'Teko_400Regular', fontSize:15, paddingTop:0}}>{detail.matchevent.name_en}</Paragraph>
                        <View style={{flexDirection:'row', paddingBottom:(windowWidth/50),justifyContent:'space-between',width:windowWidth-80}}>
                            <View style={{ marginTop:(-windowWidth/50), alignItems:'center',width:100}}>
                                <Avatar.Image size={windowWidth/5} source={{uri : detail.home_team.logo}} style={{backgroundColor:'#FFFFFF'}}/>
                                <Paragraph style={{fontFamily:'Montserrat_400Regular',fontSize:12,textAlign:'center'}}>{detail.home_team.name_en}</Paragraph>
                            </View>
                            <Paragraph style={{fontSize:30,paddingTop:30,fontFamily:'Teko_700Bold'}}>{detail.home_team.score}-{detail.away_team.score}</Paragraph>
                            <View style={{ marginTop:(-windowWidth/50), alignItems:'center',width:100}}>
                                <Avatar.Image size={windowWidth/5}  source={{uri : detail.away_team.logo}} style={{backgroundColor:'#FFFFFF'}} />
                                <Paragraph style={{fontFamily:'Montserrat_400Regular',fontSize:12,fontSize:12,textAlign:'center'}}>{detail.away_team.name_en}</Paragraph>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    {
                    detail.techStats.length < 1 ?
                    <Card.Content style={{alignItems:'center'}}>
                        <Title style={{ fontFamily:'Teko_400Regular', marginTop:(-windowWidth/40)}}>the statistics haven't been updated yet</Title>
                    </Card.Content>:
                    <Card.Content style={{alignItems:'center'}}>
                        { detail.techStats.map(i => {
                            return( i.typeName === 'BallPossession' ?
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Ball Position</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View> :  (i.typeName === 'Attack' ? 
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Attack</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : (i.typeName === 'DangerousAttack' ?
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Dangerous Attack</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : (i.typeName === 'ShotOffGoal' ? 
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Shot Off Goal</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : (i.typeName === 'CornerKick' ?
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Corner Kick</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : (i.typeName === 'Penalty' ?
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Penalty</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : (i.typeName === 'ShotOnGoal' ?
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Shot On Goal</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : (i.typeName === 'YellowCard' ?
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Yellow Card</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            : 
                            <View style={styles.cardTextContainer} key={i.typeName}>
                                <Paragraph style={styles.cardTextStatictic}>{i.home}</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>Red Card</Paragraph>
                                <Paragraph style={styles.cardTextStatictic}>{i.away}</Paragraph>
                            </View>
                            )))))))
                            )                                                        
                        })}
                    </Card.Content>
                    }
                </Card>
                </ImageBackground>
            }
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
