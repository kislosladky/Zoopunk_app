import {ImageBackground, Text, View} from "react-native";
import MapView from "react-native-maps";

export default function MapScreen({navigation}) {
  return (
    <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%"}}>
      <View>
        <MapView style={{height: "100%", width: "100%"}} showsUserLocation={"true"} mapType={"terrain"} region={
          {
            latitude: 55.056845,
            longitude: 82.885570,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}/>
      </View>
    </ImageBackground>
  );
}
