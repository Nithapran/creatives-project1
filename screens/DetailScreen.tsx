import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image, Button, Alert, TouchableWithoutFeedback, TouchableOpacity , Platform} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../colors';
export default function App() {
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:COLORS.topback}}>
        {/* <View style={{flex:.15, backgroundColor:'green',padding:20,flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{width:50,height:50,backgroundColor:'pink'}}>
                <Image style={{height:50,width:50}}
                source={require('./assets/backicon.png')}
                />
              </View>
              <View style={{width:50,height:50,backgroundColor:'orange'}}>
              <Image style={{height:50,width:50}}
                source={require('./assets/hearticon.png')}
                />
              </View>
        </View> */}
        <View style={{flex:1.1, alignItems:'center',justifyContent:'center'}}>
          <View style={{width:300,height:220}}>
          <Image style={{height:220,width:300}}
                source={require('./assets/orangepic.png')}
                />
          </View>
        </View>
        <View style={{flex:1.5, backgroundColor:'white',borderTopLeftRadius:40,borderTopRightRadius:40,padding:30}}>
              <View style={{flex:.50}}>
                <Text style={{fontFamily: "Montserrat", fontSize:40,fontWeight:"600"}}>Orange</Text>
                </View> 
              <View style={{flex:.40,flexDirection:'row',paddingTop:10,alignItems:'baseline'}}>
                      <Image style={{height:20,width:20}}
                        source={require('./assets/location.png')}
                        />
                        <Text style={{marginLeft:10,marginRight:40}}>Mexico</Text>
                        <Image style={{height:20,width:20,}}
                        source={require('./assets/fire.png')}
                        />
                        <Text style={{marginLeft:10}}>100 Kcal</Text>
                </View>  
              <View style={{flex:2.5}}>
                <Text style={{fontSize:25,fontWeight:'500'}}>About</Text>
                <Text style={{fontSize:15,fontWeight:'300',paddingTop:10}}>
                  it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>
                </View>  
               
        </View>
    </SafeAreaView>
  );
}
const designsheet = {backgroundColor:"orange"}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === 'android' ? 20 : 0
    
    
    
  },
});
