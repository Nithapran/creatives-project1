import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListItem from "../compornents/ListItem";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import firebase from "firebase/compat";
import "firebase/compat/firestore";
import { fetchProduce,addProduce } from "../services/local.service";


var DATA: any = [];

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const FavouriteScreen = ({ navigation }: { navigation: any }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [produces, setProduces] = useState([]);
  useEffect(() => {
    fetchProd()
    
  }, []);

  const fetchProd = () => {
    fetchProduce().then(
      
      function(data) { 
        console.log(data.length);
        
        setProduces(data)
       }
      );
  };

  const onFavoriteClick = useCallback(
    (param) => (e) => addProduce(param)
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchProd()
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleChahnge = (text: any) => {
    var filtered = produces.filter(function (produce: any) {
      return produce.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredproduces(filtered);
  };
  const renderItem = ({ item }) => (
    <ListItem key={item.id} produce={item} navigation={navigation} onFavoriteClick={onFavoriteClick(item)} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}
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
});

export default FavouriteScreen;
