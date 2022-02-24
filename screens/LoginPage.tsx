import React, { useState } from "react";
import { signInAsync } from "../services/api.service";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
  Alert,
  ImageBackground,
} from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const LoginPage = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function login() {
    if (username.length <= 0) {
      Alert.alert("You must enter a username");
      return;
    }
    if (password.length <= 0) {
      Alert.alert("You must enter a password");
      return;
    }

    setStatus("Authenticating ..");
    signInAsync(username, password)
      .then(() => {
        console.log("Login successful");
        let profileName = "Welcome " + username;
        navigation.reset({
          index: 0,
          routes: [{ name: "AfterLogin", params: { profileName } }],
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("Sorry, this email is already in use");
        }

        if (error.code === "auth/invalid-email") {
          console.log("Invalid Email address");
        }

        console.error(error);
        Alert.alert(`${error}`);
      });
  }

  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
      style={{flex:1}}
      source={require('../assets/bgf.jpg')}>

      <KeyboardAwareScrollView>
        <View style={styles.topBox}>
          
          <Text style={styles.textStyle}>Welcome</Text>
          <Text style={styles.textStyle}>Login to Harvest</Text>
          <Image
            style={styles.iconStyle}
            source={require("../assets/login.png")}
          />
        </View>

        <View style={styles.bottomBox}>
        
          <Text style={styles.UserPasswordText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setUsername(text)}
            value={username}
            keyboardType="email-address"
            autoCapitalize="none"
            />

          <Text style={styles.UserPasswordText}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
            />
          <Text>{status}</Text>
          <View style={styles.navButtonsWrapper}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                login();
              }}
              >
              <Text style={styles.buttonFont}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    marginTop:20,//
    width: 50,
    height: 50,
  },

  buttonStyle: {
    
    backgroundColor: "black",
    
    alignItems: "center",
    marginBottom: 25,
    marginTop: 5,
    borderRadius:20,//
    padding:18,//
  },

  buttonFont: {
    fontSize:20,//
    color: "white",
  },

  textStyle: {
    fontSize: 32,
    marginTop:20,
    fontFamily: "Montserrat_400Regular",
  },
  UserPasswordText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    
    margin: 12,
  },
  input: {
    borderRadius:20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 25,
  },
});

export default LoginPage;
