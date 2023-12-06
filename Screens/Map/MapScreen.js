import 'expo-dev-client';

import React from 'react';

import { StyleSheet, View } from 'react-native';

import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('sk.eyJ1Ijoic29sbnlzaGtvMzYyMiIsImEiOiJjbHB0amJpYjkwZnV1MmxvcDBxcmhubTZ2In0.pUpnMiKX71UHvcoJezms1w');

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
