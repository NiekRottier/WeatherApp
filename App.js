import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLocation, storeLocation} from './assets/AsyncStorage';

const Stack = createStackNavigator();

const App = () => {
  // If AsyncStorage is empty put the initial location into the storage
  getLocation().then((location) => {
    if (location === null){
      storeLocation({'lat': '51.4536672', 'lon': '3.5709125'}).then(() => console.log("Stored initial location"))
    }
    console.log(location)
  })

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        {/* Routes 'Home' and 'Settings' and corresponding React Components */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
