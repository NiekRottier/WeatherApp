import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {API_KEY} from '../assets/API_KEY';

import WeatherForecast from './WeatherForecast';

const WeatherWidget = () => {
  const [day, setDay] = useState(0)
  // Location with latitude & longitude
  const [location, setLocation] = useState({'lat': 51.4536672, 'lon': 3.5709125})
  const [fullForecast, setFullForecast] = useState({})
  const [selectedForecast, setSelectedForecast] = useState({})

  // Get weather for next 5 days from OpenWeatherMap
  useEffect(() => {
    console.log(location);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric&cnt=6`)
      .then(res => res.json())
      .then(json => {
        setFullForecast(json)
        setSelectedForecast(json.list[day])
      })
      .catch(err => console.log(err))
  }, [location])

  // Update Temp when a different day is selected
  function updateDay(dayNumber){
    setDay(dayNumber)
    setSelectedForecast(fullForecast.list[dayNumber])
  }

  return (
    <View style={styles.view}>
      {/* WeatherView */}
      <WeatherForecast day={day} forecast={selectedForecast}/>
      {/* Timeline */}
      <View style={styles.timeSelector}>
        <Slider
          style={styles.timeSlider}
          step={1}
          value={day}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFFFFF"
          onValueChange={(value) => updateDay(value)}
        />
        <Text>{day} days</Text>
      </View>
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
