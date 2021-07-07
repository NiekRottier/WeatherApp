import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import { MMKV } from 'react-native-mmkv';

const SettingsScreen = ({navigation}) => {
  // Standard location is NL, Flushing
  const [lat, setLat] = useState('51.4536672')
  const [lon, setLon] = useState('3.5709125')

  function changeValue(direction, position) {
    if (direction === 'lat'){
      setLat(position)
    } else {
      setLon(position)
    }
  }

  return (
    <View style={styles.view}>
      <View style={styles.mainContent}>
        <View style={styles.inputContainer}>
          <Text>Latitude:</Text>
          <TextInput
            placeholder='Enter latitude here'
            keyboardType="numeric"
            onChangeText={(lat) => changeValue('lat', lat)}
            value={lat}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Longitude:</Text>
          <TextInput
            placeholder='Enter longitude here'
            keyboardType="numeric"
            onChangeText={(lon) => changeValue('lon', lon)}
            value={lon}
          />
        </View>
      </View>

      <NavigationBar navigation={navigation} activeButton={'Settings'} lat={lat} lon={lon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%'
  },
  mainContent: {
    height: '92%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SettingsScreen;
