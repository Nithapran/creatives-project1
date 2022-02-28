import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListItem from "../compornents/ListItem";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat";
import "firebase/compat/firestore";

var DATA: any = [];

const FavouriteScreen = ({ navigation }: { navigation: any }) => {
  const [loading, setLoading] = useState(true);
  const [produces, setProduces] = useState({});
  const [filteredproduces, setFilteredproduces] = useState({});
  useEffect(() => {
    async function getUserInfo() {
      DATA = [];
      let doc = await firebase
        .firestore()
        .collection("produce")
        .where("type", "==", "fruit")
        .limit(2)
        .get();

      doc.docs.map((element) => DATA.push(element.data()));
      console.log("Called");
      setProduces(DATA);
      setFilteredproduces(DATA);
      setLoading(false);
    }
    getUserInfo();
  }, []);

  const handleChahnge = (text: any) => {
    var filtered = produces.filter(function (produce: any) {
      return produce.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredproduces(filtered);
  };
  const renderItem = ({ item }) => (
    <ListItem produce={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredproduces}
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
});

export default FavouriteScreen;
