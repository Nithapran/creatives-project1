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
import {
  useFonts,
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";

const SignUpPage = ({ navigation }: { navigation: any }) => {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [passConfirm, setPasswordConfirm] = useState("");
  const [status, setStatus] = useState("");

  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light_Italic,
    Raleway_400Regular_Italic,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold_Italic,
    Raleway_700Bold_Italic,
    Raleway_800ExtraBold_Italic,
    Raleway_900Black_Italic,
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
      <KeyboardAwareScrollView>
        <View style={styles.topBox}>
          <Image
            style={styles.logoStyle}
            source={require("../assets/newlogo.png")}
          />
          <Text
            style={{
              marginTop: 20,
              fontFamily: "Raleway_800ExtraBold",
              color: "#bf9449",
              fontSize: 15,
            }}
          >
            All Produce In One Place
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={user}
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            value={pass}
            onChangeText={(text) => setPassword(text)}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            value={passConfirm}
            onChangeText={(text) => setPasswordConfirm(text)}
          />
          <Text>{status}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              signUp();
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 20,
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
    marginTop: 20,
    width: 50,
    height: 50,
  },
  logoStyle: {
    marginTop: 20, //
    width: 100,
    height: 100,
    borderColor: "#616161",
    borderRadius: 50,
    borderWidth: 0.2,
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
    fontSize: 20,
    color: "white",
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

export default SignUpPage;
