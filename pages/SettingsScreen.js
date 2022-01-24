import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {getLocation, storeLocation} from '../assets/AsyncStorage';

const SettingsScreen = ({navigation, route}) => {
  const [lat, setLat] = useState("1")
  const [lon, setLon] = useState("1")

  // Put the data from the storage into the state variables
  useEffect(() => {
    getLocation().then((location) => {
      setLat(location.lat)
      setLon(location.lon)
    })
  }, [])

  // Update the location in the storage
  useEffect(() => {
    storeLocation({'lat': lat, 'lon': lon}).then(() => {})
  }, [lat, lon])


  return (
    <View style={styles.view}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Set location</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Latitude:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter latitude here'
            keyboardType="numeric"
            onChangeText={(value) => setLat(value)}
            value={lat}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Longitude:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter longitude here'
            keyboardType="numeric"
            onChangeText={(value) => setLon(value)}
            value={lon}
          />
        </View>
      </View>

      <NavigationBar navigation={navigation} activeButton={'Settings'} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: '#f3f3f3'
  },
  mainContent: {
    height: '92%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: '20%',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 40
  },
  label: {
    width: '30%',
    textAlign: 'right',
    fontSize: 20,
    color: '#404040'
  },
  input: {
    width: '65%',
    fontSize: 20,
    backgroundColor: '#83EAF5',
    borderBottomColor: '#78A9FA',
    borderBottomWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});

export default SettingsScreen;
