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
import { color } from "react-native-elements/dist/helpers";

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
      <View style={styles.topBox}>
          
          <Image
            style={styles.logoStyle}
            source={require("../assets/newlogo.png")}
          />
          <Text
            style={{
              marginTop: 20,
              fontFamily: "Raleway",
              fontWeight: "800",
              color:"grey",
              fontSize: 15,
            }}
          >
            All Produce In One Place
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setUsername(text)}
            value={username}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              login();
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 20, fontFamily: "Raleway", fontWeight: "700" }}
          >
            Didn't have an account?{" "}
          </Text>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => {
              navigation.navigate("SignUpPage");
            }}
          >
            <Text
              style={{
                color: "blue",
                fontFamily: "Raleway",
                fontWeight: "700",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
  },
  topBox: {
    justifyContent: 'center',
alignItems: 'center',
flex: 1,
marginBottom:20
  },
  
  navButtonsWrapper: {
    height: 100,
  },
  logoStyle: {
    marginTop: 20, //
    width: 100,
    height: 100,
    borderColor:"#616161",
    borderRadius:50,
    borderWidth:0.2,
  },

  buttonStyle: {
    marginTop: 20,
    height: 50,
    width: "90%",
    borderRadius: 15,

    backgroundColor: "black",
    justifyContent: "center",
  },

  buttonFont: {
    fontSize: 20, //
    color: "white",
  },

  textStyle: {
    fontSize: 32,
    marginTop: 20,
    fontFamily: "Montserrat_400Regular",
  },
  UserPasswordText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,

    margin: 12,
  },
  input: {
    height: 40,
    width: "90%",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: "#f8f8f8",
    shadowColor: "#999999",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.62,
    shadowRadius: 7.46,
    elevation: 9,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
  },
});

export default LoginPage;
