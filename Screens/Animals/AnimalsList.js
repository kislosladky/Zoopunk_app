import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, ImageBackground } from 'react-native';

const DATA = [
  {
    title: 'Животные Северной Америки',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Животные Азии',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Фантастические твари',
    data: ['Дагестанский тур', 'Coke', 'Beer'],
  },
  {
    title: 'Капибары',
    data: ['Илья', 'Саня'],
  },
];

const AnimalsList = ({navigation}) => (
  <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%"}}>
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </ImageBackground>
);

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

export default AnimalsList;
