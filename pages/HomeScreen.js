import React from 'react';
import {DevSettings, Pressable, StyleSheet, Text, View} from 'react-native';
import WeatherWidget from '../components/WeatherWidget';
import NavigationBar from '../components/NavigationBar';
import ConnectionCheck from '../components/ConnectionCheck';

const HomeScreen = ({navigation, route}) => {
  console.log(ConnectionCheck());
  if (ConnectionCheck()){
    return (
      <View style={styles.view}>
        <WeatherWidget fromSettings={route.params.fromSettings}/>

        <NavigationBar navigation={navigation} activeButton={'Home'} />
      </View>
    )
  } else {
    return (
      <View>
        <Text style={styles.connectionText}>Please connect to the internet</Text>
        <Pressable style={styles.reloadButton} onPress={() => DevSettings.reload()}>
          <Text style={styles.buttonText}>Reload</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  connectionText: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 30
  },
  reloadButton: {
    height: 100,
    width: '40%',
    marginLeft: '30%',
    backgroundColor: '#52bcff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    // color: 'gray',
    fontSize: 24
  }
});

export default HomeScreen;
