import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { SecondStackNavigator} from "./StackNavigator";

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Upcoming" component={TabNavigator} />
      <Drawer.Screen name="FinishedNav" component={SecondStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;