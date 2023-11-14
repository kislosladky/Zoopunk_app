import {Button, SafeAreaView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {TextStyles} from "../Styles/TextStyles";

export default function WelcomePage({navigation}) {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{marginLeft: "3%", marginTop: "5%", flex: 10}}>
        <Text style={TextStyles.WelcomPageText}>Привет друг! </Text>
        <Text style={TextStyles.WelcomPageText}>Давай вместе исследовать Новосибирский зоопарк!</Text>
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <Button title="Вперёд!" onPress={() => navigation.navigate("HomeScreen")}/>
      </SafeAreaView>
    </View>
  );
}
