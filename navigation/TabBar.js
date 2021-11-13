import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import MainScreen from "../screens/MainScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";

import { StyleSheet, View, Image, Text } from "react-native";

const tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "#000000",
          height: 90,
        },
      }}
    >
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/home_48.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#a8a8a8",
                }}
              />
              <Text style={{ color: focused ? "#ffffff" : "#a8a8a8" }}>
                Home
              </Text>
            </View>
          ),
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0, // Just in case.
          },
        }}
      />
      <tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/favorite_48.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#a8a8a8",
                }}
              />
              <Text style={{ color: focused ? "#ffffff" : "#a8a8a8" }}>
                Favourite
              </Text>
            </View>
          ),
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0, // Just in case.
          },
        }}
      />
      <tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/settings_48.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffffff" : "#a8a8a8",
                }}
              />
              <Text style={{ color: focused ? "#ffffff" : "#a8a8a8" }}>
                Settings
              </Text>
            </View>
          ),
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0, // Just in case.
          },
        }}
      />
    </tab.Navigator>
  );
};

export default tabs;
