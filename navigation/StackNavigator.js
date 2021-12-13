import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import MainScreen from "../screens/MainScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";
import LandingPage from "../screens/LandingPage";
import SignUpPage from "../screens/SignUpPage";
import AfterLogin from "../screens/AfterLogin";
import LoginPage from "../screens/LoginPage";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/*Logged Out Pages*/}
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="SignUpPage" options={{headerShown: true}} component={SignUpPage}/>
      <Stack.Screen name="LoginPage" options={{headerShown: true}} component={LoginPage} />

      {/*Logged In Pages*/}
      <Stack.Screen name="Lists" options={{headerShown: true}} component={ListScreen} />
      <Stack.Screen name="Detail" options={{headerShown: true}} component={DetailScreen} />
      <Stack.Screen name="AfterLogin" component={AfterLogin} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
