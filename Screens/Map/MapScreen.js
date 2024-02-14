import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import MapView from "react-native-maps";

// import Mapbox from '@rnmapbox/maps';
//
// Mapbox.setAccessToken('sk.eyJ1Ijoic29sbnlzaGtvMzYyMiIsImEiOiJjbHB0amJpYjkwZnV1MmxvcDBxcmhubTZ2In0.pUpnMiKX71UHvcoJezms1w');

export default function MapScreen ({navigation}){
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  page: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  container: {
    height: "100%",
    width: "100%",
  },
});

