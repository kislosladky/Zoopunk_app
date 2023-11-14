import {Button, Image, ImageBackground, Pressable, ScrollView, Text, View} from "react-native";
import {ImageStyles} from "../../Styles/ImageStyles";
import styled from 'styled-components'
import Card from "../../Blocks/Card";
import MapScreen from "../Map/MapScreen";

export default function UserMainScreen({navigation}) {
  return (
    <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={ImageStyles.backgroundImg}>
      <ScrollView>
      <Container>
        <TitleBar>
          <Avatar source={require("../../assets/Avatar.png")}/>
          <Title>Привет,</Title>
          <Name>друг</Name>
        </TitleBar>
        <Subtitle>Викторины</Subtitle>
        <View style={{flexDirection: "row"}}>
          <ScrollView horizontal={true}>
            <Pressable onPress={() => navigation.navigate("MapScreen")}>
              <Card img={require("../../assets/ButtonMountains.png")} title = {"Как хорошо ты знаешь капибар?"}  />
            </Pressable>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Животные северной америки"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Животные северной америки"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Животные северной америки"}/>
          </ScrollView>
        </View>
        <Subtitle>Достижения</Subtitle>
        <View style={{flexDirection: "row"}}>
          <ScrollView horizontal={true}>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Стажер Орнитолог"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Опытный Орнитолог"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Капибарин"}/>
          </ScrollView>
        </View>
        <Subtitle>Лист посещения</Subtitle>
        <View style={{flexDirection: "row"}}>
          <ScrollView horizontal={true}>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Как хорошо ты знаешь капибар?"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Как хорошо ты знаешь капибар?"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Как хорошо ты знаешь капибар?"}/>
            <Card img={require("../../assets/ButtonMountains.png")} title = {"Как хорошо ты знаешь капибар?"}/>
          </ScrollView>
        </View>
      </Container>
      </ScrollView>
    </ImageBackground>

  );
}

const Container = styled.View`
  flex: 1;
`

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
`
const TitleBar = styled.View`
  width: 100%;
  margin-top: 5%;
  padding-left: 25%;
`

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 100px;
  margin-left: 30px;
  position: absolute;
  top: 0;
  left: 0;
`

const Subtitle = styled.Text`
  color: #62626b;
  font-weight: 600;
  font-size: 18px;
  margin-left: 10%;
  margin-top: 10%;
`
