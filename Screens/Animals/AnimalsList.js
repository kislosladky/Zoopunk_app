import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    FlatList,
    TouchableOpacity, Image, View, TextInput,
} from 'react-native';
import {SearchBar} from "react-native-screens";
const DATA = [

  {
    id: '1',
    img: require("../../assets/Tur.jpeg"),
    title: 'Дагестанский neh 1',
    bg: "#ffd1d1",
  },
  {
    id: '2',
    title: 'Дагестанский neh 2',
    bg: '#bcffb9',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '3',
    title: 'Дагестанский хуй 3',
    bg: '#f9ffae',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '4',
    title: 'Дагестанский хуй 4',
    bg: '#e5d0ff',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '5',
    title: 'Хуй aaaaaaaaaaaa',
    bg: '#ffc7a1',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '6',
    title: 'Хуй aaaaaaaaaaaa',
    bg: '#ffc7a1',
    img: require("../../assets/Tur.jpeg"),
  },
  {
    id: '7',
    title: 'Хуй aaaaaaaaaaaa',
    bg: '#ffc7a1',
    img: require("../../assets/Tur.jpeg"),
  },
    {
        id: '8',
        title: 'Хуй aaaaaaaaaaaa',
        bg: '#ffc7a1',
        img: require("../../assets/Tur.jpeg"),
    },
    {
        id: '9',
        title: 'Хуй aaaaaaaaaaaa',
        bg: '#ffc7a1',
        img: require("../../assets/Tur.jpeg"),
    },
];


export default function AnimalsList ({navigation}){
  return(
      <SafeAreaView>
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.87)"}}>

          <View style={{marginBottom: '26%'}}>
           <View style={{backgroundColor:'white', paddingBottom:'3%', elevation: 10}}>
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
                       marginTop: '12%',
                       textAlign: "center"}}
                   placeholder="Дагестанский тур"/>
           </View>

            <FlatList
                data={DATA}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (

                    <TouchableOpacity style={{elevation: 10, width: "45%", height: 200, backgroundColor: item.bg, borderRadius: 20, margin: "2%", alignItems: "center", marginTop: '5%'}} onPress={() => navigation.navigate('CurrentAnimal',  {title: item.title, img: item.img})} activeOpacity={0.9}>
                      <Image source={item.img} style={{width: "100%", height: "75%", borderTopLeftRadius:20, borderTopRightRadius:20}}/>
                      <View style={{borderRadius:20, marginTop: '-10%', width: '100%', backgroundColor: item.bg, alignContent: 'center'}}>
                        <Text style={{textAlign:'center', paddingTop: 9, paddingVertical: 4, paddingHorizontal: 5, fontFamily: 'monserratBold', color: '#404040', fontSize: 18, alignSelf:'center'}} >{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                // contentContainerStyle={{alignItems: "center"}}
            />
          </View>

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