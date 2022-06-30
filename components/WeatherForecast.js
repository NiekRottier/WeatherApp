import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {weatherConditions} from '../assets/WeatherConditions';

const WeatherForecast = ({location, forecast}) => {
  // Check if the forecast is empty
  if(Object.keys(forecast).length === 0){
    return (
      <View style={[styles.view, {backgroundColor:'#3CD3AD'}]}>
        <Text>Retrieving weather information..</Text>
      </View>
    );
  } else {
    // Set time
    let unix_timestamp = forecast.dt
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Date of the forecast
    let forecastFullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    // Hours of the forecast
    let forecastHours = `${date.getHours()}:00`;

    let weather = forecast.weather[0].main;
    // If it's Clear and night, show a moon icon
    if(weather === "Clear" && (date.getHours()-1 >= 21 || date.getHours()-1 <= 6)){
      weather = 'ClearNight'
    }

    // Set weather icon
    let icon;
    switch(weatherConditions[weather].icon) {
      case 'weather-rainy':
        icon = require('../assets/images/weather-rainy.png')
        break;
      case 'weather-sunny':
        icon = require('../assets/images/weather-sunny.png')
        break;
      case 'weather-lightning':
        icon = require('../assets/images/weather-lightning.png')
        break;
      case 'weather-cloudy':
        icon = require('../assets/images/weather-cloudy.png')
        break;
      case 'weather-snowy':
        icon = require('../assets/images/weather-snowy.png')
        break;
      case 'weather-fog':
        icon = require('../assets/images/weather-fog.png')
        break;
      case 'weather-moon':
        icon = require('../assets/images/weather-moon.png')
        break;
      default:
        icon = require('../assets/images/weather-sunny.png')
    }

    return (
      <View style={styles.view}>
        <Text style={styles.date}>{forecastFullDate}</Text>
        <Text style={styles.time}>{forecastHours}</Text>
        <Text style={styles.location}>{location}</Text>
        <Image source={icon}/>
        <Text style={styles.temp}>{Math.round(forecast.main.temp)}°C</Text>
        <Text style={styles.weather}>{forecast.weather[0].description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78A9FA'
  },
  date: {
    fontSize: 20,
    color: 'white'
  },
  time: {
    fontSize: 30,
    color: 'white'
  },
  location: {
    fontSize: 15,
    color: 'white'
  },
  weather: {
    fontSize: 20,
    color: 'white',
    textTransform: 'capitalize'
  },
  temp: {
    fontSize: 40,
    color: 'white'
  }
});

export default WeatherForecast;
