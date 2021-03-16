import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, SecondStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Upcoming" component={MainStackNavigator} />
      <Tab.Screen name="Finished" component={SecondStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;