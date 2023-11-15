import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, ImageBackground} from 'react-native';

const Quizes = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Квиз1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Квиз2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Квиз3',
  },
];


const Destinations = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Достижение',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Достижение2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Достижение3',
  },
];


const Paths = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = (props) => (
  <View style={{height: 170, width: 270, backgroundColor: "#c9f1d5", margin: 10, borderRadius: 20}}>
    <Text>{props.title}</Text>
  </View>
);

function UserMainScreen({navigation})  {
  return (
    <SafeAreaView>
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text>Привет</Text>
          <Text>нагибатор228</Text>
          <Text style={{marginTop: "7%", marginBottom: "7%", marginLeft: "5%"}}>Квизы</Text>
          <FlatList
            data={Quizes}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{marginTop: "10%", marginBottom: "7%", marginLeft: "5%"}}>Достижения</Text>
          <FlatList
            data={Destinations}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={{marginTop: "7%", marginBottom: "7%", marginLeft: "5%"}}>Лист посещения</Text>
          <FlatList
            data={Paths}
            alwaysBounceHorizontal={true}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};


export default UserMainScreen;
