import React from 'react';
import {StyleSheet, View} from 'react-native';
import WeatherWidget from '../components/WeatherWidget';
import NavigationBar from '../components/NavigationBar';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.view}>
      <WeatherWidget fromSettings={route.params.fromSettings}/>

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
