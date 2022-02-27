import * as React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

import {
    useFonts,
    Montserrat_100Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";

var item = {
  name: "Apple",
  Description:
    "Lorem Ipsum is simply dummy teake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialf LeIpsum passages, and more recently with desktop pub",
  URL: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Fuji_apple.jpg",
  location: "Canada",
};


export default class CategoryView extends React.Component {


    
  constructor(props) {
    super(props);
    this.state = { isFruit: props.type == "fruit" ? true : false };
  }

  render() {
    var image;
    var name;
    const isFruit = this.state.isFruit;
    if (isFruit) {
      name = "Fruits";
      image = <Image style={styles.imageStyle} source={require("../assets/fruits.png")} />;
    } else {
      name = "Vegetables";
      image = <Image style={styles.imageStyle} source={require("../assets/vegetables.png")} />;
    }

    return (
      <View style={styles.boxStyle}>
        {image }
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    boxStyle: {
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "white",
        alignSelf: 'flex-start',
        alignItems: "center",
        shadowColor: "#999999",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.62,
    shadowRadius: 7.46,
    elevation: 9,
      },
      imageStyle: {
        height:124
        ,
        width:153,
         marginTop:10,
         marginLeft:15,
         marginRight:15,
         marginBottom:10,
      },
      textStyle: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 25,
        marginTop:10,
        marginBottom:10,
     }
  });
