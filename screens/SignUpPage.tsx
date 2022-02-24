import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail } from "../helpers";
import { signUpUser } from "../services/api.service";
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
  Alert,
  Button,
  ImageBackground,
} from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const SignUpPage = ({ navigation }: { navigation: any }) => {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [passConfirm, setPasswordConfirm] = useState("");
  const [status, setStatus] = useState("");

  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function signUp() {
    if (user.length <= 0) {
      Alert.alert("Please enter a username");
      return;
    }

    if (!validateEmail(user)) {
      Alert.alert("Please enter a valid email");
      return;
    }
    if (pass.length <= 0) {
      Alert.alert("Please enter a password");
      return;
    }

    if (pass !== passConfirm) {
      Alert.alert("Please confirm password");
      return;
    }

    setStatus("Registering ..");

    signUpUser(user, pass)
      .then(() => {
        console.log("Successfully created");
        Alert.alert("Account created, you can now login");
        navigation.goBack();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("Email address is already taken");
        }

        if (error.code === "auth/invalid-email") {
          console.log("This is not a valid email");
        }

        console.error(error);
        Alert.alert(`${error}`);
      });

    return;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
      style={{flex:1}}
      source={require('../assets/bgf.jpg')}>

      <KeyboardAwareScrollView>
        <View style={styles.topBox}>
          
          <Text style={styles.textStyle}>Welcome</Text>
          <Text style={styles.textStyle}>Sign Up here</Text>
          <Image
            style={styles.iconStyle}
            source={require("../assets/register.png")}
            />
        </View>

        <View style={styles.bottomBox}>
          <Text style={styles.UserPasswordText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={user}
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
            />
          <Text style={styles.UserPasswordText}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            value={pass}
            onChangeText={(text) => setPassword(text)}
            />
          <Text style={styles.UserPasswordText}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            value={passConfirm}
            onChangeText={(text) => setPasswordConfirm(text)}
            />
          <Text>{status}</Text>
          <View style={styles.navButtonsWrapper}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                signUp();
              }}
              >
              <Text style={styles.buttonFont}>Sign Up</Text>
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
    marginTop:20,
    width: 50,
    height: 50,
  },

  buttonStyle: {
    backgroundColor: "black",
  
    alignItems: "center",
    marginBottom: 25,
    marginTop: 5,
    borderRadius:20,
    padding:18,
  },

  buttonFont: {
    fontSize:20,
    color: "white",
  },

  textStyle: {
    fontSize: 32,
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

export default SignUpPage;
