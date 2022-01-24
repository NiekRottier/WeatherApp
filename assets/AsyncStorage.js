import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to read Location from AsyncStorage
export const getLocation = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('location')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
  }
}

// Function to store location in AsyncStorage
export const storeLocation = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('location', jsonValue)
  } catch (e) {
    console.log(e);
  }
}
