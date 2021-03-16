import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigations/TabNavigator";
import {Provider} from 'react-redux'
import {store} from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

