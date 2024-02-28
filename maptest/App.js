import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('sk.eyJ1IjoiYWxvaGFrdWlubyIsImEiOiJjbHQ0NWExNnExZHkwMmtyem1pNTc0dWI5In0.8ez9w40n4jCrFGWjbeKarg');

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.mapcontainer}>
       <Mapbox.MapView style={styles.map} />
     </View>
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
    mapcontainer: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    }
});
