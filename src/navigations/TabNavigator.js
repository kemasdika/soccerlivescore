import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, SecondStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();
const screenOptionStyle = {

};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#FEA443',
      inactiveTintColor: 'gray',
      labelStyle:{
        fontSize:15,
        fontWeight:'bold'
      }
    }}>
      <Tab.Screen name="Upcoming" component={MainStackNavigator} />
      <Tab.Screen name="Finished" component={SecondStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;