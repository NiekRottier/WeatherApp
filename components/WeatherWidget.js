import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {API_KEY} from '../assets/API_KEY';

import WeatherForecast from './WeatherForecast';

const WeatherWidget = () => {
  const [hours, setHours] = useState(0)
  // Location with latitude & longitude
  const [location, setLocation] = useState({'lat': 51.4536672, 'lon': 3.5709125})
  const [city, setCity] = useState('Not found..')
  const [fullForecast, setFullForecast] = useState({})
  const [selectedForecast, setSelectedForecast] = useState({})

  // Get weather for next 48 hours from OpenWeatherMap
  useEffect(() => {
    console.log(location);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric&cnt=17`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setFullForecast(json)
        setSelectedForecast(json.list[hours])
        // If there is a city fill up city variable
        if(json.city.country !== ''){ setCity(json.city.country + ', ' + json.city.name) }
      })
      .catch(err => console.log(err))
  }, [location])

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
      <WeatherForecast hours={hours} forecast={selectedForecast}/>
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
      <Text>City: {city}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
  timeSelector: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ADECA'
  },
  timeSlider: {
    width: '75%',
    height: 40
  }
});

export default WeatherWidget;
