import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {API_KEY} from '../assets/API_KEY';
import {getLocation} from '../assets/AsyncStorage';

import WeatherForecast from './WeatherForecast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WeatherWidget = () => {
  const [location, setLocation] = useState({'lat': '1', 'lon': '1'})
  const [hours, setHours] = useState(0)
  const [city, setCity] = useState('City not found..')
  const [fullForecast, setFullForecast] = useState({})
  const [selectedForecast, setSelectedForecast] = useState({})

  useEffect(() => {
    // Put the data from the storage into the state variables
    getLocation().then((location) => {
      console.log(location)
      setLocation(location)
    })
  }, [])

  // Get weather for next 48 hours from OpenWeatherMap when location updates
  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric&cnt=17`)
  //     .then(res => res.json())
  //     .then(json => {
  //       // If response code is 200 OK continue, else log code and message
  //       if (json.cod === "200") {
  //         setFullForecast(json)
  //         setSelectedForecast(json.list[hours])
  //         // If there is a city fill up city variable, else fill it with 'City not found'
  //         if (json.city.name === ""){
  //           setCity('City not found..')
  //         } else {
  //           setCity(json.city.country + ', ' + json.city.name)
  //         }
  //       } else {
  //         console.log(`ERROR ${json.cod}: ${json.message}`)
  //       }
  //     })
  // }, [location])

  // Update Temp when a different hours is selected
  function updateHours(newHours){
    setHours(newHours)
    // Check if fullForecast has been filled by API call
    if(Object.keys(fullForecast).length !== 0) {
      setSelectedForecast(fullForecast.list[newHours / 3])
    }
  }

  return (
    <View style={styles.view}>
      {/* WeatherView */}
      <WeatherForecast location={city} forecast={selectedForecast}/>
      {/* Timeline */}
      <View style={styles.timeSelector}>
        <Slider
          style={styles.timeSlider}
          step={3}
          value={hours}
          minimumValue={0}
          maximumValue={48}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFFFFF"
          onValueChange={(value) => updateHours(value)}
        />
        <Text>+{hours} hours</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '92%'
  },
  timeSelector: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ADECA'
  },
  timeSlider: {
    width: '75%'
  }
});

export default WeatherWidget;
