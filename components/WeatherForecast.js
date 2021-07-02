import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {weatherConditions} from '../assets/WeatherConditions';

const WeatherForecast = ({hours, forecast}) => {
  // Check if the forecast is empty
  if(Object.keys(forecast).length === 0){
    return (
      <View style={[styles.view, {backgroundColor:'#3CD3AD'}]}>
        <Text>Retrieving weather information..</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.view, {backgroundColor: weatherConditions[forecast.weather[0].main].color}]}>
        <Text>{forecast.dt_txt} (+{hours} hours)</Text>
        <Text>Temperature: {Math.round(forecast.main.temp)} °C</Text>
        <Text>{forecast.weather[0].main} - {forecast.weather[0].description}</Text>
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
