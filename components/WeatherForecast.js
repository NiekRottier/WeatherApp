import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WeatherConditions} from '../assets/WeatherConditions';

const WeatherForecast = ({day, weather}) => {
  if(weather === 'Retrieving weather'){
    return (
      <View style={[styles.view, {backgroundColor:'#3CD3AD'}]}>
        <Text>Retrieving weather..</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.view, {backgroundColor:WeatherConditions[weather].color}]}>
        <Text>WeatherForecast in {day} days</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default WeatherForecast;
