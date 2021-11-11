import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainScreen = ({}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'while'}}>
        <text>hi there</text>
    </SafeAreaView>
  );
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});