import {
    ImageBackground, Pressable,
    SafeAreaView, ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Touchable, TouchableOpacity, View
} from "react-native";
import {ImageStyles} from "../../Styles/ImageStyles";
import React from "react";
import CardDescription from "./CurrentAnimalDescription";
import CardPhoto from "./CurrentAnimalPhoto";

export default function CurrentAnimal(props) {
    return (
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={ImageStyles.backgroundImg}>
            <SafeAreaView style={styles.container}>
                <CardPhoto img={props.img} />
                <CardDescription title={props.title} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Проложить маршрут до животного</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Добавить в лист ожидания</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
