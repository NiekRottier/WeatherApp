import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {API_KEY} from '../assets/API_KEY';
import {getLocation} from '../assets/AsyncStorage';

import WeatherForecast from './WeatherForecast';

const WeatherWidget = ({fromSettings}) => {
  const [location, setLocation] = useState({})
  const [hours, setHours] = useState(0)
  const [city, setCity] = useState('City not found..')
  const [fullForecast, setFullForecast] = useState({})
  const [selectedForecast, setSelectedForecast] = useState({})
  const isFirstRun = useRef(true)

  // Put the data from the storage into the state variables
  useEffect(() => {
    getLocation().then((data) => {
      setLocation(data)
    })
  }, [])

  // If the user comes from the settings
  if (fromSettings){
    getLocation().then((data) => {
      // Check if the location is changed
      if (location.lat === data.lat && location.lon === data.lon){
        console.log('Location not updated')
      } else{
        setLocation(data)
        console.log('Location updated')
      }

    })
  }

  // Fetch Weather for the next 48h when location updates from the 2nd run onwards. During the first run is the location not yet filled.
  useEffect(() => {
    if (isFirstRun.current){
        isFirstRun.current = false
    } else {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric&cnt=17`)
        .then(res => res.json())
        .then(json => {
          // If response code is 200 OK continue, else log code and message
          if (json.cod === "200") {
            setFullForecast(json)
            setSelectedForecast(json.list[hours])
            // If there is a city fill up city variable, else fill it with 'City not found'
            if (json.city.name === "") {
              setCity('City not found..')
            } else {
              setCity(json.city.country + ', ' + json.city.name)
            }
            console.log('Updated the weatherforcast')
          } else {
            console.log(`ERROR ${json.cod}: ${json.message}`)
          }
        })
    }
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
