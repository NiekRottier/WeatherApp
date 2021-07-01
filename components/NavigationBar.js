import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

const NavigationBar = ({navigation, activeButton}) => {
  const [homeStyle, setHomeStyle] = useState(styles.navButton);
  const [settingsStyle, setSettingsStyle] = useState(styles.navButton);

  useEffect(() => {
    (activeButton === 'Home') ? setHomeStyle([styles.navButton, styles.activeButton]) : setSettingsStyle([styles.navButton, styles.activeButton]);
  }, [activeButton])

  return(
    <View style={styles.buttonContainer} >
      <Pressable style={homeStyle} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
      <Pressable style={settingsStyle} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  navButton: {
    height: 60,
    width: '50%',
    backgroundColor: '#24f2bb',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  activeButton: {
    backgroundColor: '#2fe0b1'
  }
});

export default NavigationBar;
