import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

import WeatherForecast from './WeatherForecast';

const WeatherWidget = () => {
  const [year, setYear] = useState(1)

  return (
    <View style={styles.view}>
      {/* WeatherView */}
      <WeatherForecast year={year}/>
      {/* Timeline */}
      <View style={styles.timeSelector}>
        <Slider
          style={styles.timeSlider}
          step={1}
          value={year}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#FFFFFF"
          onValueChange={(value) => setYear(value)}
        />
        <Text>{year} years</Text>
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
