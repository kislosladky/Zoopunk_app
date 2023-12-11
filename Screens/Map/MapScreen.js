import 'expo-dev-client';

import React from 'react';

import {Platform, StyleSheet, View} from 'react-native';

import MapView from "react-native-maps";


export default function MapScreen ({navigation}){
  let map;
  if (Platform.OS === "android") {
    map = <MapView
      style={styles.map}
      //specify our coordinates.
      initialRegion={{
        latitude: 55.057505,
        longitude: 82.883791,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  } else {
    map = <MapView
      style={styles.map}
      //specify our coordinates.
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {map}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  container: {
    height: "100%",
    width: "100%",
  },

  map: {
    flex: 1,
  },
});
