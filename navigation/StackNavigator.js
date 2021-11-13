import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import MainScreen from "../screens/MainScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Lists" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
