import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text>SettingsScreen</Text>

      <NavigationBar navigation={navigation} activeButton={'Settings'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%'
  }
});

export default SettingsScreen;
