import React from 'react';
import {SafeAreaView, FlatList, Text, ScrollView, ImageBackground, TouchableOpacity, Alert, Image} from 'react-native';
import {Icon} from "react-native-vector-icons";
import {Ionicons} from "@expo/vector-icons";



let User =
  {
    name: "нагибатор",
    avatar: require("../../assets/Avatar.png"),
    id: 23423,
    registration: false
  }


const Quizes = [
  {
    title: 'Как хорошо ты знаешь капибар?',
    img: require("../../assets/Quiz1.png")
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Кто проживает на дне океана?',
    img: require("../../assets/Quiz2.png")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Какая феечка винкс ты сегодня?',
    img: require("../../assets/Quiz3.png")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',

    title: 'Квиз3',
    img: require("../../assets/Quiz4.png")
  },
];


const Achivments = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Стажер Орнитолог',
    img: require("../../assets/Destination1.png")
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Опытный Орнитолог',
    img: require("../../assets/Destination2.png")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Капибарин',
    img: require("../../assets/Destination3.png")
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'По кочану и по кочерыжке',
    img: require("../../assets/Destination4.png")
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Достижение2',
    img: require("../../assets/Destination5.png")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Достижение3',
    img: require("../../assets/Destination6.png")
  },
];


// const Paths = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Зоопарк за час',
//     img: require("../../assets/Paths1.png")
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Зоопарк без аттракционов',
//     img: require("../../assets/Paths2.png")
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'И что-то ещё',
//     img: require("../../assets/Paths3.png")
//   },
// ];

const Item = (props) => (
  <TouchableOpacity style={{height: 170, width: 270, margin: 10, borderRadius: 20}}>
    <ImageBackground source={props.img} style={{width: 270, height: 170}}>
      <Text style={{fontFamily: 'monserratLight', fontSize: 25, marginLeft: 20, marginTop: 20, marginRight: 20}}>{props.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const AchivementsItem = (props) => (
  <TouchableOpacity style={{height: 170, width: 270, margin: 10, borderRadius: 20}} onPress={() => Alert.alert(props.title)}>
    <ImageBackground source={props.img} style={{width: 270, height: 170}}>
      <Text style={{fontFamily: 'monserratLight', fontSize: 25, marginLeft: 20, marginTop: 20, marginRight: 20}}>{props.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

function UserMainScreen({navigation})  {
  let hello;
  if (User.registration){
    hello = <Text style={{fontFamily: 'monserratLight', fontSize: 20}}>{User.name} </Text>;
  } else{
    hello = <Text style={{fontFamily: 'monserratLight', fontSize: 20}}>дорогой друг!</Text>;
  }
  return (
    <SafeAreaView>
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={{flexDirection:"row", marginTop: 15, marginLeft: 15}}>
            <Image source={User.avatar} style={{height: 50, width: 50, borderRadius: 100}}/>
            <SafeAreaView style={{flex: 5, marginLeft: 7}}>
              <Text style={{fontFamily: 'monserratLight', fontSize: 20}}>Привет, </Text>
              {hello}
            </SafeAreaView>
            <SafeAreaView style={{flex: 1}}>
              <TouchableOpacity onPress={() => navigation.navigate("Setting", User)}>
                <Ionicons name="options" size={40} color="#DFFBCE"/>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
          <Text style={{fontFamily: 'monserratLight', marginTop: "7%", marginBottom: "7%", marginLeft: "5%"}}>Квизы</Text>
          <FlatList
            data={Quizes}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => <Item title={item.title} img = {item.img}/>}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{fontFamily: 'monserratLight', marginTop: "10%", marginBottom: "7%", marginLeft: "5%"}}>Твои успехи</Text>
          <FlatList
            data={Achivments}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => <AchivementsItem title={item.title} img = {item.img}/>}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
          {/*<Text style={{marginTop: "7%", marginBottom: "7%", marginLeft: "5%"}}>Лист посещения</Text>*/}
          {/*<FlatList*/}
          {/*  data={Paths}*/}
          {/*  alwaysBounceHorizontal={true}*/}
          {/*  renderItem={({item}) => <Item title={item.title} img = {item.img}/>}*/}
          {/*  keyExtractor={item => item.id}*/}
          {/*  horizontal = {true}*/}
          {/*  showsHorizontalScrollIndicator={false}*/}
          {/*/>*/}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}




export default UserMainScreen;
