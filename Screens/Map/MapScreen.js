import 'expo-dev-client';

import React from 'react';

import { StyleSheet, View } from 'react-native';

import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('k.eyJ1Ijoic29sbnlzaGtvMzYyMiIsImEiOiJjbHBqOHM5Z3gwN2Z4Mm5sNnF5M2QxN3VpIn0.aYxcRFnAm4aka-4-YLcdwQ');

export default function MapScreen ({navigation}){
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
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
