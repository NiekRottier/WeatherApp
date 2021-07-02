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
          animationEnabled: false,
          headerLeft: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#78A9FA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24
          }
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
