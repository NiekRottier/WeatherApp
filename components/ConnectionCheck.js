import React, {useEffect, useState} from 'react';
import * as NetInfo from '@react-native-community/netinfo';

const ConnectionCheck = () => {
  const [isConnected, setIsConnected] = useState(undefined)

  NetInfo.fetch().then(state => {
    // console.log("Connection type", state.type);
    // console.log("Is connected?", state.isConnected);
    setIsConnected(state.isConnected)
  });

  // useEffect(() => {
  //   console.log(isConnected);
  //   return(isConnected)
  // }, [isConnected])

  return(isConnected)
};

export default ConnectionCheck;
