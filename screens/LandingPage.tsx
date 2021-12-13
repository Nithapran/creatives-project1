import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

const LandingPage = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <Image
          style={styles.iconStyle}
          source={require("./assets/placeholder_logo.png")}
        />
        <Text style={styles.textStyle}>Welcome to Harvest</Text>
      </View>

      <View style={styles.bottomBox}>
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("SignUpPage");
            }}
          >
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("LoginPage");
            }}
          >
            <Text style={styles.buttonFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 50,
  },

  bottomBox: {
    flex: 2,
    justifyContent: "flex-end",
    padding: 50,
  },
  navButtonsWrapper: {
    height: 100,
  },
  iconStyle: {
    width: 150,
    height: 150,
  },

  buttonStyle: {
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    marginBottom: 25,
  },

  buttonFont: {
    color: "white",
  },

  textStyle: {
    fontSize: 32,
    fontFamily: "",
  },
});

export default LandingPage;
