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
    img: require("../../assets/Tur.jpeg"),
    title: 'Дагестанский neh 1',
    bg: "#b87979",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Дагестанский neh 2',
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
];


export default function AnimalsList ({navigation}){
  const loadCurrentAnimal = () => {
    navigation.navigate('CurrentAnimal');
  }
  return(
    <SafeAreaView>
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
        <FlatList
          data={DATA}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{width: "45%", height: 200, backgroundColor: item.bg, borderRadius: 20, margin: "2%", alignItems: "center"}}>
              <Image source={item.img} style={{width: "70%", height: "70%", marginTop: "10%", marginBottom: "10%"}}/>
              <TouchableOpacity style={{backgroundColor: "#fff"}}>
                <Text style={{fontFamily: 'monserratLight'}} onPress={() => navigation.navigate('CurrentAnimal',  {title: item.title, img: item.img})}>{item.title}</Text>
              </TouchableOpacity>
            </View>
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
