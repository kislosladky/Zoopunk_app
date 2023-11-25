import {Alert, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import RNPickerSelect from "react-native-picker-select";

function functionCombined({navigation}) {
 Alert.alert("Успешно", "Ваши данные были успешно сохранены и обновлены");
 navigation.navigate("User");
}

export default function Setting({navigation}) {

  return (
    <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
      <View style={{marginTop: 100,
                    marginLeft: 60,
                    marginRight: 60,
                    borderRadius: 20,
      }}>
        <View style={{borderRadius: 20, backgroundColor: "#DFFBCE"}}>
          <Text
            style={{
                    fontSize: 25,
                    textAlign: "center",
                    fontFamily: 'monserratLight',
                    }}>
            Настройки
          </Text>
        </View>
        <Text style={{marginTop: 20, fontFamily: 'monserratLight'}}>Сменить имя пользователя</Text>
        <TextInput
          maxLength={40}
          style={{
            borderColor: "#DFFBCE",
            borderWidth: 2,
            height: 40,
            borderRadius: 20,
            marginTop: 10,
            textAlign: "center"}}
          placeholder="Имя пользователя"/>
        <Text style={{marginTop: 20, fontFamily: 'monserratLight'}}>Сменить пароль</Text>
        <TextInput
          maxLength={40}
          secureTextEntry={true}
          style={{
            borderColor: "#DFFBCE",
            borderWidth: 3,
            height: 40,
            borderRadius: 20,
            marginTop: 10,
            textAlign: "center"}}
          placeholder="пароль"/>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Картинка1", value: "Я честно честно это допишу" },
            { label: "Картинка2", value: "Я честно честно это допишу" },
            { label: "Картинка3", value: "Я честно честно это допишу" },
            { label: "Картинка3", value: "Я честно честно это допишу" },
            { label: "Картинка3", value: "Я честно честно это допишу" },
            { label: "Картинка4", value: "Я честно честно это допишу" },
          ]}
        />
        <TouchableOpacity style={{backgroundColor: "#BEE4FF", borderRadius: 20, alignItems: "center", marginTop: 50, height: 33}}
                      onPress={() => functionCombined({navigation})}  >
          <Text style={{fontFamily: 'monserratLight', fontSize: 20}}>Cохранить и выйти</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
