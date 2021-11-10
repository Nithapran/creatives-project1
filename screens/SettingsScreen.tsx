import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import Apploading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";


const SettingsScreen = ({}) => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/darkmodeIcon.png")}
        />
        <View style={styles.boxOne}>
          <Text style={styles.textStyle}>Dark Mode</Text>
        </View>

        <Switch />
      </View>

      <View style={styles.rowStyle}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/bugIcon.png")}
        />
        <View style={styles.boxOne}>
          <Text style={styles.textStyle}>Report a Bug</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed Bug Report");
          }}
        >
          <Image
            style={styles.buttonStyle}
            source={require("./../assets/chevronIcon.svg.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowStyle}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/feedbackIcon.png")}
        />
        <View style={styles.boxOne}>
          <Text style={styles.textStyle}>Share Feedback</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log("pressed Bug Report");
          }}
        >
          <Image
            style={styles.buttonStyle}
            source={require("./../assets/chevronIcon.svg.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowStyle}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/versionIcon.png")}
        />
        <View style={styles.boxOne}>
          <Text style={styles.textStyle}>App Version</Text>
        </View>
        <Text style={styles.versionStyle}>v1.0</Text>
      </View>

      <View style={styles.rowStyle}>
        <Image
          style={styles.iconStyle}
          source={require("../assets/aboutIcon.png")}
        />
        <View style={styles.boxOne}>
          <Text style={styles.textStyle}>About</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed Bug Report");
          }}
        >
          <Image
            style={styles.buttonStyle}
            source={require("./../assets/chevronIcon.svg.png")}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    padding: 30,
  },
  rowStyle: {
    margin: 10,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },

  boxOne: {
    width: "70%",
    height: 50,
    alignItems: "flex-start",
  },

  textStyle: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
  versionStyle: {
    marginStart: 10,
    fontSize: 16,
  },

  iconStyle: {
    width: 50,
    height: 50,
  },
  buttonStyle: {
    marginStart: 12,
    width: 25,
    height: 25,
  },
});
