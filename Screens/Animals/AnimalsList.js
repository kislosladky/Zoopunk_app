import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native';

const DATA = [
  {
    img: require("../../assets/Tur.jpeg"),
    title: 'Дагестанский хуй 1',
    bg: "#b87979",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Дагестанский хуй 2',
    bg: '#85e781',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Дагестанский хуй 3',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Дагестанский хуй 4',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Хуй',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Хуй1',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Хуй2',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Хуй3',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Капибара',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
];

const AnimalsList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
        <FlatList
          data={DATA}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Card bg = {item.bg} title = {item.title} img={item.img}/>}//<Item title={item.title} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{alignItems: "center"}}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: "center"
  },
  title: {
    fontSize: 32,
  },
});

export default AnimalsList;



const Card = (props) => (
  <TouchableOpacity style={{width: "45%", height: 200, backgroundColor: props.bg, borderRadius: 20, margin: "2%", alignItems: "center"}}>
    <Image source={props.img} style={{width: "70%", height: "70%", marginTop: "10%", marginBottom: "10%"}}/>
    <TouchableOpacity style={{backgroundColor: "#fff"}}>
      <Text style={{fontFamily: 'monserratLight'}}>{props.title}</Text>
    </TouchableOpacity>
  </TouchableOpacity>
)


