import {Alert, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";

function functionCombined({navigation}) {
 // Alert.alert("Успешно", "Ваши данные были успешно сохранены и обновлены");
 navigation.navigate("User");
}

export default function Setting({navigation}) {

  return (
    <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
      <View style={{backgroundColor:'white', borderRadius:20, marginTop:'30%', width:'90%', alignSelf:'center', elevation:10}}>
          <View style={{marginTop: "5%",
              marginLeft: "20%",
              marginRight: "20%",
              borderRadius: 20,
          }}>
              <View style={{ marginTop:'20%'}}>
                  <View style={{borderRadius: 20, backgroundColor: "#d5fcb5", elevation: 10, marginTop: "-10%", height: '10%', justifyContent:'center'}}>
                      <Text
                          style={{
                              fontSize: 25,
                              textAlign: "center",
                              fontFamily: 'monserratBold',
                              color: '#404040',

                          }}>
                          Настройки
                      </Text>
                  </View>
                  <Text style={{marginTop: "5%", fontFamily: 'monserratBold', color: '#404040', fontSize: 20}}>Сменить имя пользователя</Text>
                  <TextInput
                      maxLength={40}
                      style={{
                          borderColor: "#DFFBCE",
                          borderWidth: 2,
                          height: "15%",
                          borderRadius: 20,
                          marginTop: "5%",
                          textAlign: "center"}}
                      placeholder="Имя пользователя"/>
                  <Text style={{marginTop: 20, fontFamily: 'monserratBold', color: '#404040', fontSize: 20}}>Сменить пароль</Text>
                  <TextInput
                      maxLength={40}
                      secureTextEntry={true}
                      style={{
                          borderColor: "#DFFBCE",
                          borderWidth: "1%",
                          height: "15%",
                          borderRadius: 20,
                          marginTop: "5%",
                          textAlign: "center"}}
                      placeholder="пароль"/>
                  <TouchableOpacity style={{backgroundColor: "#BEE4FF", elevation: 10, borderRadius: 20, alignItems: "center", height:"10%", justifyContent:'center', marginBottom:'10%', marginTop: "10%"}}
                                    onPress={() => functionCombined({navigation})}  >
                      <Text style={{fontFamily: 'monserratBold', fontSize: 16, color: '#404040'}}>Cохранить и выйти</Text>
                  </TouchableOpacity>
              </View>
          </View>

      </View>

    </ImageBackground>
  );
}
