import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherWidget from '../components/WeatherWidget';
import NavigationBar from '../components/NavigationBar';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text>HomeScreen</Text>
      <WeatherWidget/>

      <NavigationBar navigation={navigation} activeButton={'Home'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%'
  }
});

export default HomeScreen;
