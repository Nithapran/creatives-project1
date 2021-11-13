import { NavigationRouteContext } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import ListItem from '../compornents/ListItem';

const DATA = [
    {
      id: 'Item1',
      title: 'First Item',
    },
    {
      id: 'Item2',
      title: 'Second Item',
    },
    {
      id: 'Item3',
      title: 'Third Item',
    },
    {
        id: 'Item4',
        title: 'Third Item',
      },
      {
        id: 'Item5',
        title: 'Third Item',
      },
      {
        id: 'Item6',
        title: 'Third Item',
      },
  ];

const ListScreen = ({navigation}: {navigation: any}) => {
   
  
    return (
      <SafeAreaView style={styles.container} >
        <TouchableOpacity onPress={() => {
          navigation.navigate('Detail');
          }}>
        
        <FlatList
          data={DATA}
          renderItem={ListItem}
          keyExtractor={item => item.id}
        /> 
        </TouchableOpacity>
       
      </SafeAreaView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
  
  export default ListScreen;