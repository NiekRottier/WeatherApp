import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WeatherConditions} from '../assets/WeatherConditions';

const WeatherForecast = ({day, forecast}) => {
  console.log(forecast);
  if(Object.keys(forecast).length === 0){
    return (
      <View style={[styles.view, {backgroundColor:'#3CD3AD'}]}>
        <Text>Retrieving weather..</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.view, {backgroundColor:'lightgreen'}]}>
        <Text>WeatherForecast in {day} days</Text>
        <Text>Temperature: {forecast.main.temp}</Text>
      </View>
    );
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
