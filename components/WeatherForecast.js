import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WeatherForecast = ({year}) => {
  return (
    <View style={styles.view}>
      <Text>WeatherForecast of {year} year ago</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '70%',
    backgroundColor: '#83EAF5'
  }
});

export default WeatherForecast;
