import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
  View,
} from 'react-native';
import {Ionicons} from "@expo/vector-icons";



let User =
  {
    name: "нагибатор",
    avatar: require("../../assets/parrotAva.png"),
    id: 23423,
    registration: false
  }


const Quizes = [
  {
    id: "1",
    title: 'Как хорошо ты знаешь капибар?',
    img: require("../../assets/blueBulp.png"),
    descriptions: "вау вау вау крутой квиз"
  },
  {
    id: '2',
    title: 'Кто проживает на дне океана?',
    img: require("../../assets/yellowBulp.png"),
    descriptions: "вау вау вау крутой квиз"
  },
  {
    id: '3',
    title: 'Какая феечка винкс ты сегодня?',
    img: require("../../assets/greenBulp.png"),
    descriptions: "вау вау вау крутой квиз"
  },
  {
    id: '4',
    title: 'Квиз3',
    img: require("../../assets/redBulp.png"),
    descriptions: "вау вау вау крутой квиз"
  },
];


const Achivments = [
  {
    id: '1',
    title: 'Стажер Орнитолог',
    description: "Посети 10 птиц",
    img: require("../../assets/4xBlueAch.png")
  },
  {
    id: '2',
    title: 'Опытный Орнитолог',
    description: "Посети 20 птиц и пройди квиз по ним",
    img: require("../../assets/4xBrownAch.png")
  },
  {
    id: '3',
    title: 'Капибарин',
    description: "Отдохни у капибар и пройди викторину",
    img: require("../../assets/4xGreenAch.png")
  },
  {
    id: '4',
    title: 'Знаток рыб',
    description: "Посети 10 птиц",
    img: require("../../assets/4xRedAch.png")
  },
  {
    id: '5',
    title: 'Постоянный посетитель',
    description: "Посети зоопарк 20 раз и пройди все викторины!",
    img: require("../../assets/4xPurpleAch.png")
  },
];

const AchivementsItem = (props) => (
  <TouchableOpacity activeOpacity={0.9} style={{height: 170, width: 270, margin: 10, borderRadius: 20, elevation: 5}} onPress={() => Alert.alert(props.title, props.description)}>
    <ImageBackground source={props.img} style={{width: 270, height: 170}}>
      <Text style={{fontFamily: 'monserratBold', fontSize: 25, marginLeft: 20, marginTop: 20, marginRight: 20, color:'#404040'}}>{props.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

function UserMainScreen({navigation})  {
  let hello;
  if (User.registration){
    hello = <Text style={{fontFamily: 'monserratBold', fontSize: 20, color: '#404040'}}>{User.name} </Text>;
  } else{
    hello = <Text style={{fontFamily: 'monserratBold', fontSize: 20, color: '#404040'}}>дорогой друг!</Text>;
  }
  return (
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
      <SafeAreaView style={{marginTop:'15%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <SafeAreaView style={{marginTop: 15, marginLeft: '3%', flexDirection:"row"}}>
            <View style={{paddingLeft: '2%', elevation: 10, backgroundColor:'white', flexDirection:"row", borderRadius: 20, width: '77%', marginRight:'6%', height:'120%'}}>
              <Image source={User.avatar} style={{height: 70, width: 70, borderRadius: 100, alignSelf:'center'}}/>
              <SafeAreaView style={{flex: 5, marginLeft: 7, justifyContent:'center'}}>
                <Text style={{fontFamily: 'monserratBold', fontSize: 20, color: '#404040'}}>Привет, </Text>
                {hello}
              </SafeAreaView>
            </View>
            <SafeAreaView style={{flex: 1}}>
              <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Setting", User)}>
                <Ionicons name="options" size={40} color="#404040"/>
              </TouchableOpacity>
            </SafeAreaView>

          </SafeAreaView>

          <Text style={{fontFamily: 'monserratBold', marginTop: "15%", marginBottom: "1%", marginLeft: "5%", color: '#404040', fontSize:32}}>Квизы</Text>
          <FlatList
            data={Quizes}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => (
              <TouchableOpacity activeOpacity={0.9} style={{height: 170, width: 270, margin: 10, borderRadius: 20, elevation: 5}} onPress={() => Alert.alert(item.title, item.descriptions,
                [{text: "Пройти квиз", onPress: () => navigation.navigate("QuizHome")}, {text: "Выбрать другой"}])}>
                <ImageBackground source={item.img} style={{width: 270, height: 170}}>
                  <Text style={{fontFamily: 'monserratBold', fontSize: 25, marginLeft: 20, marginTop: 20, marginRight: 20, color: '#404040'}}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>)}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontFamily: 'monserratBold', marginTop: "10%", marginBottom: "1%", marginLeft: "5%", color: '#404040', fontSize:32}}>Твои успехи</Text>
          <FlatList
            data={Achivments}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => <AchivementsItem title={item.title} img = {item.img} description={item.description}/>}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}
export default UserMainScreen;
