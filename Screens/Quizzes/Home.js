import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from './Components/TitleBar';

const Home = ({navigation}) => {
    return (
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
            <View style={styles.container}>
                <View style={styles.textHolder}>
                    <Title titleText={'Название Викторины'} />
                </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Quizzes')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Начать</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#F1FFF0',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        elevation: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',
    },
    textHolder: {
        width: '100%',
        height: '30%',
        backgroundColor: '#F1FFF0',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: '30%',
        marginBottom: '40%',
        elevation: 10,
    },
    containerButton: {
        elevation: 10,

    }
});
