import React from 'react';
import {StyleSheet, View} from 'react-native';
import WeatherWidget from '../components/WeatherWidget';
import NavigationBar from '../components/NavigationBar';

const HomeScreen = ({route, navigation}) => {
  return (
    <View style={styles.view}>
      <WeatherWidget />

      <NavigationBar navigation={navigation} activeButton={'Home'} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default HomeScreen;
