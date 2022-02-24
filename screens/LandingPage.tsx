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
  ImageBackground,
  Button,
} from "react-native";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

const LandingPage = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
      style={{flex:1}}
      source={require('../assets/bgf.jpg')}>

      <View style={styles.topBox}>
        <Text style={styles.textStyle}>Welcome</Text>
        <Image
          style={styles.iconStyle}
          source={require("../assets/newlogo.png")}
          />
        
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
            </ImageBackground>
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
    marginTop:50,
    width: 250,
    height: 250,
  },

  buttonStyle: {
    backgroundColor: "black",
    padding: 18,
    marginTop: 5,
    borderRadius:20,
    alignItems: "center",
    marginBottom: 5,
  },

  buttonFont: {
    fontSize:20,
    color: "white",
  },

  textStyle: {
    marginTop:150,
    textAlign:"center",
    fontSize: 40,
    fontFamily: "Montserrat_400Regular",
  },
  
});

export default LandingPage;
