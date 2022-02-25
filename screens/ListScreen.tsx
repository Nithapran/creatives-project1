import React, { useEffect, useState } from "react";
import firebase from "firebase/compat";
import "firebase/compat/firestore";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import { Icon } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import ListItem from "../compornents/ListItem";

var DATA:any = [];



const ListScreen = ({ route,navigation }: { navigation: any }) => {
  const { type } = route.params;
  const [loading, setLoading] = useState(true);
    const [produces, setProduces] = useState({});
  useEffect(() => {
    async function getUserInfo(){
      DATA = [];
      let doc = await firebase
      .firestore()
      .collection('produce')
      .where('type', "==", type)
      .get();

      doc.docs.map(element =>
        DATA.push(element.data()) );
        setProduces(DATA);
                setLoading(false);
    }
    getUserInfo();
  })
  const renderItem = ({ item }) => (
    <ListItem produce={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={styles.container}>
     
        <View style={styles.topBarContainerStyle}>
          <View style={styles.searchBarContainerStyle}>
            <Image
              style={styles.searchIconStyle}
              source={require("../assets/search.png")}
            />
            <TextInput
              style={styles.searchBarStyle}
              placeholder="Search for a product"
            />
          </View>

          <View style={styles.filterButtonContainer}>
            <Image
              style={styles.filterButtonStyle}
              source={require("../assets/filter.png")}
            />
          </View>
        </View>

        <FlatList
          data={produces}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  topBarContainerStyle: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 25,
  },
  searchBarContainerStyle: {
    flex: 1,
    height: 50,
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: "#f8f8f8",

    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  filterButtonContainer: {
    height: 50,
    width: 50,
    marginRight: 20,
    backgroundColor: "#f8f8f8",
    alignContent: "center",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  filterButtonStyle: {
    width: "80%",
    height: undefined,
    aspectRatio: 1,
  },
  searchBarStyle: {
    flex: 3,
    marginLeft: 20,
  },
  searchIconStyle: {
    height: 22,
    width: undefined,
    aspectRatio: 1,
    alignItems: "flex-start",
  },
});

export default ListScreen;
