import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

const NavigationBar = ({navigation, activeButton, lat, lon}) => {
  const [homeStyle, setHomeStyle] = useState(styles.navButton);
  const [settingsStyle, setSettingsStyle] = useState(styles.navButton);

  // Check which button is active and add a style to it
  useEffect(() => {
    (activeButton === 'Home') ? setHomeStyle([styles.navButton, styles.activeButton]) : setSettingsStyle([styles.navButton, styles.activeButton]);
  }, [activeButton])

  return(
    <View style={styles.buttonContainer} >
      {/* Using Pressable instead of Button for styling options */}
      <Pressable style={homeStyle} onPress={() => navigation.navigate({
        name:'Home',
        params: { 'lat': lat, 'lon': lon }
      })}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
      <Pressable style={settingsStyle} onPress={() => navigation.navigate({
        name:'Settings',
        params: { 'lat': lat, 'lon': lon }
      })}>
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '8%',
    flexDirection: 'row'
  },
  navButton: {
    height: '100%',
    width: '50%',
    backgroundColor: '#78FABF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  activeButton: {
    backgroundColor: '#58F5AE'
  }
});

export default NavigationBar;
