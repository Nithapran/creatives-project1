import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import AppLoading from "expo-app-loading";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";


const MainScreen = ({navigation}: {navigation: any}) => {

  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <View style={styles.container}>

      <View style={styles.searchbar}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 20 }}
        />
        <Text style={styles.searchTextStyle}>Search  for a product</Text>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTexStyle}>Categories</Text>
      </View>

      <View style={styles.boxSectionStyle}>
        <TouchableOpacity
          style={styles.boxStyle}
          onPress={() => {
            console.log("Vegetables Pressed!");
            navigation.navigate('Lists');
          }}>
          <Image
            style={styles.image1Style}
            source={require("./../assets/Vegetable.png")}
          />
          <Text style={styles.textStyle}>Vegetables</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxStyle}
          onPress={() => {
            console.log("Fruits Pressed!");
            navigation.navigate('Lists');
          }}>
          <Image
            style={styles.image2Style}
            source={require("./../assets/Fruits.png")}
          />
          <Text style={styles.textStyle}>Fruits</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />

    </View >
  );
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    padding: 15,
    paddingBottom: 100
  },
  searchbar: {
    width: "100%",
    height: 52,
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 10
  },
  searchTextStyle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    position: "absolute",
    marginLeft: 50
  },
  category: {
    paddingTop: 25,
    paddingBottom: 10
  },
  categoryTexStyle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 36
  },
  boxSectionStyle: {
    flex: 2,
    width: "100%",
    justifyContent: "space-evenly"
  },
  boxStyle: {
    padding: 25,
    height: "38%",
    margin: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#F8F8F8"
  },
  textStyle: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 24
  },
  image1Style: {
    paddingTop: 10,
    width: Platform.OS === "ios" ? 225 : 150,
    height: Platform.OS === "ios" ? 200 : 100
  },
  image2Style: {
    paddingTop: 10,
    width: Platform.OS === "ios" ? 200 : 135,
    height: Platform.OS === "ios" ? 150 : 95
  }
});