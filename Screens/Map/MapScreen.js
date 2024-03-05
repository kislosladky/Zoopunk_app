import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MapView from "react-native-maps";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MapScreen ({navigation}){
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Destinations')}>
            <MaterialCommunityIcons name="map-marker-path" size={36} color="green" style={{alignSelf: "center"}}/>
          </TouchableOpacity>
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  button: {
    width: '15%',
    height: '7%',
    backgroundColor: "#ffffff",
    borderRadius: "20%",
    marginTop: "7%",
    marginLeft: "83%",
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

