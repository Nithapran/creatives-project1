import * as React from "react";
import {
  View,
  Image,
  Switch,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { checkExist } from "../services/local.service";
import { useState } from "react";
import { useEffect } from "react";

var item = {
  name: "Apple",
  Description:
    "Lorem Ipsum is simply dummy teake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialf LeIpsum passages, and more recently with desktop pub",
  URL: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Fuji_apple.jpg",
  location: "Canada",
};

const tabs = ({ produce, navigation,onFavoriteClick }) => {
  const [favIcon, setFavIcon] = useState(null);
  const ic = require("../assets/favorite_48.png")
  const ic_fill = require("../assets/favorite_48-fill.png")
  useEffect(() => {
    changeImage()
    
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onFav = () => {
    
    onFavoriteClick();
    wait(200).then(() => changeImage());
  }

  const changeImage = () => {

    checkExist(produce.id).then(
      
      function(data) { 
        if (data) {
          setFavIcon(ic_fill)    
          console.log('asdasd',checkExist(produce.id))
        } else {
          console.log('wwwwww',checkExist(produce.id))
          setFavIcon(ic)    
        }
       }
      );

  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", {
          produce: produce,
        });
      }}
    >
      <ListItem bottomDivider={false} containerStyle={styles.container}>
        <Avatar
          rounded={true}
          style={styles.avatarStyle}
          source={{ uri: produce != null ? produce.url : item.URL }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.titleSyle}>
            {produce != null ? produce.name : item.name}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {produce != null ? produce.description : item.Description}
          </ListItem.Subtitle>
          <View style={styles.rowStyle}>
            <Image
              style={styles.iconStyle}
              source={require("../screens/assets/location.png")}
              style={styles.iconStyle}
            />
            <Text style={styles.textStyle}>{item.location}</Text>
            <TouchableOpacity onPress={onFav}>
            <Image
              style={styles.iconStyle}
              source={favIcon}
              style={styles.iconStyle}
            />
            </TouchableOpacity>
            
          </View>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

export default tabs;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15, // adds the rounded corners
    backgroundColor: "#fff",
    shadowColor: "#999999",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.62,
    shadowRadius: 7.46,
    elevation: 9,
  },
  rowStyle: {
    margin: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },

  boxOne: {
    height: 50,
  },

  textStyle: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    alignItems: "flex-start",
    flex: 3,
  },
  titleSyle: {
    fontWeight: "bold",
  },
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: "#a8a8a8",
    flexShrink: 3,
  },
  avatarStyle: {
    width: 60,
    height: 60,
  },
});
