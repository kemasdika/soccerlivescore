import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {UpcomingScreen} from "../screens/UpcomingScreen";
import {FinishedSreen} from "../screens/FinishedScreen";
import {DetailScreen} from "../screens/DetailScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
  };

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Upcoming" component={UpcomingScreen} />
      </Stack.Navigator>
    );
  }

const SecondStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Finished" component={FinishedSreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export {MainStackNavigator,SecondStackNavigator};
