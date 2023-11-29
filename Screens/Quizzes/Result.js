import {
    ImageBackground,
    SafeAreaView, StatusBar,
    StyleSheet,
    Text, TouchableOpacity, View,
} from "react-native";
import React from "react";
import ResultQuiz from "./Components/ResultQuiz"

const Result = ({navigation}) => {
    return(
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
            <SafeAreaView style = {styles.container}>
                <ResultQuiz title={'aaaa'} rwanswers={'papeigovna'}></ResultQuiz>
                <TouchableOpacity style={styles.startButt} onPress={()=>navigation.navigate('QuizHome')}>
                    <Text style={styles.startButtStyle}>Home</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    )
}
export default Result

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        marginTop: '20%'
    },
    startButt: {
        // backgroundColor: '#000',
        backgroundColor: '#DEF1FF',
        borderRadius: 20,
        width: '60%',
        height: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    startButtStyle: {
        alignSelf: 'center',
    },


});
