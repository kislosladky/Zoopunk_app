import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text, TouchableHighlight,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native";
import {ImageStyles} from "../../Styles/ImageStyles";
import React from "react";
import CardDescription from "./CurrentAnimalDescription";
import CardPhoto from "./CurrentAnimalPhoto";
import {useRoute} from "@react-navigation/native";

const Photos = [
    {
        id : '1',
        img: require("../../assets/Tur.jpeg"),
    },
    {
        id : '2',
        img: require("../../assets/Tur.jpeg"),
    },
    {
        id : '2',
        img: require("../../assets/Tur.jpeg"),
    },
    {
        id : '2',
        img: require("../../assets/Tur.jpeg"),
    },
];

export default function CurrentAnimal({navigation}, props) {
    const route = useRoute()
    return (
      <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={ImageStyles.backgroundImg}>
          <SafeAreaView style={styles.container}>
              <View>
                  <FlatList
                      data={route.params?.photos}
                      alwaysBounceHorizontal={true}
                      renderItem={({item}) => (
                          <TouchableOpacity activeOpacity={1} disabled={true}>
                              <CardPhoto img={item.img}/>
                          </TouchableOpacity>

                      )}
                      keyExtractor={item => item.id}
                      horizontal = {true}
                      showsHorizontalScrollIndicator={false}
                  />
              </View>
                  {/*<CardDescription title={'aaaaaaaaaaaa'}></CardDescription>*/}
              <View style={{elevation: 10, backgroundColor:'#DEF1FF', borderRadius: 20, width:'90%', height:'50%', alignSelf:'center', margin:'5%', padding:'5%'}}>
                <Text style={{fontSize: 17, fontFamily: 'monserratLight'}}>{route.params?.description}</Text>
              </View>
              <TouchableOpacity style={{width: '90%', alignSelf:'center'}} activeOpacity={0.9}>
                  <Text style={{padding: 7, backgroundColor:'#F8F6E4', borderRadius: 20, fontSize: 18, fontFamily:'monserratBold', alignSelf:'center', textAlign:'center', elevation:10 }}>
                      Проложить маршрут до животного
                  </Text>
              </TouchableOpacity>
          </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '8%',
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'rgb(195,241,255)',
        marginTop: '3%',
        width: '100%',
        height: '5%',
        justifyContent: "center",
    },
    text:{
        color: 'black',
        fontSize: 14,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }

});
