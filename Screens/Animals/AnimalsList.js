import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity, Image
} from 'react-native';
const DATA = [

  {
    id: '1',
    img: require("../../assets/Tur.jpeg"),
    title: 'Дагестанский neh 1',
    bg: "#b87979",
  },
  {
    id: '2',
    title: 'Дагестанский neh 2',
    bg: '#85e781',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '3',
    title: 'Дагестанский хуй 3',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '4',
    title: 'Дагестанский хуй 4',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '5',
    title: 'Хуй',
    bg: '#b87979',
    img: require("../../assets/Tur.jpeg"),
  },
];


export default function AnimalsList ({navigation}){
  return(
    <SafeAreaView>
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
        <FlatList
          data={DATA}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
              <TouchableOpacity style={{width: "45%", height: 200, backgroundColor: item.bg, borderRadius: 20, margin: "2%", alignItems: "center"}} onPress={() => navigation.navigate('CurrentAnimal',  {title: item.title, img: item.img})}>
              <Image source={item.img} style={{width: "70%", height: "70%", marginTop: "5%", marginBottom: "10%"}}/>
                <Text style={{fontFamily: 'monserratLight'}} >{item.title}</Text>
              </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{alignItems: "center"}}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
