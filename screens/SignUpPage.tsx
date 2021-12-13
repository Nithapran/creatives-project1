import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const SignUpPage = ({ navigation }: { navigation: any }) => {
  const [user, setUsername] = React.useState("");
  const [pass, setPassword] = React.useState("");
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
       <KeyboardAwareScrollView>
      <View style={styles.topBox}>
        <Image
          style={styles.iconStyle}
          source={require("./assets/placeholder_logo.png")}
        />
        <Text style={styles.textStyle}>Sign Up With Harvest</Text>
      </View>

      <View style={styles.bottomBox}>
        <Text style={styles.UserPasswordText}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.UserPasswordText}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("LoginPage");
            }}
          >
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 25,
  },

  buttonFont: {
    color: "white",
  },

  textStyle: {
    fontSize: 32,
  },
  UserPasswordText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignUpPage;
