import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
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
          initialParams={{'lat': '51.4536672', 'lon': '3.5709125'}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          initialParams={{'lat': '51.4536672', 'lon': '3.5709125'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
