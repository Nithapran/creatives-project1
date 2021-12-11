import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/TabBar';
import StackNavigator from './navigation/StackNavigator';


const App = () => {
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;