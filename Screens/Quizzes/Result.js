import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import Title from './Components/TitleBar';

const Result = ({navigation, route}) => {
    const {score} = route.params;
    return (
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
            <View style={styles.container}>
                <TouchableWithoutFeedback style={styles.elevationHolder}>
                    <View style={styles.resultHolder}>
                        <Title titleText='Правильных ответов:' />
                        <Text style={styles.scoreValue}>{score/10}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity onPress={() => navigation.navigate('QuizHome')} style={styles.button}>
                    <Text style={styles.buttonText}>На страницу викторины</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
};



export default Result;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#FFFEE9',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        elevation: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'black',
    },
    scoreValue:{
        fontSize: 24,
        alignSelf:'center'
    },
    resultHolder:{
        backgroundColor: '#FFFEE9',
        borderRadius: 20,
        paddingLeft: 10,
        paddingBottom: 16,
        marginBottom: '20%',
        marginTop: '60%',
    },
    elevationHolder:{
        elevation: 10,
    }
});