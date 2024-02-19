import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView, StatusBar,
  StyleSheet,
  Text,
  TextInput, Touchable,
  TouchableOpacity,
  View
} from "react-native";

export default function RegistrationPage ({navigation}){
  return(
    <SafeAreaView>
      <ImageBackground source={require("../assets/regBack.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.87)"}}>
        <Text style={{textAlign:'center', paddingTop: '15%', paddingVertical: 4, paddingHorizontal: 5, fontFamily: 'monserratBold', color: '#404040', fontSize: 55, alignSelf:'center'}}>
          Добрый{"\n"} день!
        </Text>
        <TextInput
          maxLength={40}
          style={{
            position: 'relative',
            display:'block',
            zIndex: 99,
            elevation: 10,
            alignSelf:'center',
            width:'70%',
            backgroundColor:'white',
            borderColor: "#DFFBCE",
            borderWidth: 2,
            height: 40,
            borderRadius: 20,
            marginTop: '5%',
            textAlign: "center"}}
          placeholder="логин">
        </TextInput>
        <TextInput
          maxLength={40}
          style={{
            position: 'relative',
            display:'block',
            zIndex: 99,
            elevation: 10,
            alignSelf:'center',
            width:'70%',
            backgroundColor:'white',
            borderColor: "#DFFBCE",
            borderWidth: 2,
            height: 40,
            borderRadius: 20,
            marginTop: '5%',
            textAlign: "center"}}
          placeholder="пароль">
        </TextInput>
        <TouchableOpacity
          style={{
            position: 'relative',
            display:'block',
            zIndex: 99,
            elevation: 10,
            alignSelf:'center',
            width:'70%',
            backgroundColor:'#DFFBCE',
            borderColor: "#DFFBCE",
            borderWidth: 2,
            height: 40,
            borderRadius: 20,
            marginTop: '7%',
            textAlign: "center"}}>
          <Text style={{textAlign:'center', paddingVertical: 4, paddingHorizontal: 5, fontFamily: 'monserratBold', color: '#404040', fontSize: 20, alignSelf:'center'}}>
            войти
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{paddingTop: "4%"}} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={{textAlign:'center', paddingVertical: 4, paddingHorizontal: 5, fontFamily: 'monserratBold', color: '#404040', fontSize: 20, alignSelf:'center'}}>
            войти как гость
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});
