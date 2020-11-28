
import React from 'react';
import {StyleSheet,View} from 'react-native'


import Loginscreen from './Screens/Login'
export default function App(){
return (
    <View style={{ flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Loginscreen/>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
