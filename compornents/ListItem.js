
import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View,Image, Switch,Text ,StyleSheet} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'


var item = {
    name: "Apple",
    Description: "Lorem Ipsum is simply dummy teake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialf LeIpsum passages, and more recently with desktop pub",
    URL: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Fuji_apple.jpg",
    location: "Canada"
}

const tabs = () => {
    return(
        <ListItem bottomDivider={false}  containerStyle= {styles.container} >
        <Avatar rounded={true} style={styles.avatarStyle} source={{uri: item.URL}} />
        <ListItem.Content>
          <ListItem.Title style={styles.titleSyle}>{item.name}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>{item.Description}</ListItem.Subtitle>
          <View style={styles.rowStyle}>
          <Image
          style={styles.iconStyle}
          source={require("../screens/assets/location.png")}
          style={styles.iconStyle}
          />
         <Text style={styles.textStyle}>{item.location}</Text>

        <Image
          style={styles.iconStyle}
          source={require("../assets/favorite_48.png")}
          style={styles.iconStyle}
        />
      </View>
        </ListItem.Content>
      </ListItem>
    );
}

export default tabs;

const styles = StyleSheet.create({
    container: { marginLeft: 20,
      marginRight: 20, 
      marginTop: 10,
      marginBottom: 10, 
      borderRadius: 15, // adds the rounded corners
      backgroundColor: '#fff',
      shadowColor: "#999999",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.62,
      shadowRadius: 7.46,
      elevation: 9 
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
      flex:3,
      
    },
    titleSyle: {
      fontWeight: 'bold'
    },
    iconStyle: {
      width:25,
      height:25,
      tintColor: '#a8a8a8',
      flexShrink: 3
    },
    avatarStyle: {
      width:60,
      height:60,
  }
  });
  

