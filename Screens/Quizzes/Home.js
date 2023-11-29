import {
    ImageBackground,
    SafeAreaView, StatusBar,
    StyleSheet,
    Text, TouchableOpacity, View,
} from "react-native";
import React from "react";
import TitleBar from "./Components/TitleBar"


const Home = ({navigation}, props) => {
    return(
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
            <SafeAreaView style={styles.container}>
                    <TitleBar title="title" description="description"></TitleBar>
                    <TouchableOpacity style={styles.startButt} onPress={()=>navigation.navigate('Quizzes')}>
                        <Text style={styles.startButtStyle}>
                            Start button
                        </Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        marginTop: '20%',
    },
    startButt: {
        // backgroundColor: '#000',
        backgroundColor: '#DEF1FF',
        borderRadius: 20,
        width: '60%',
        height: '10%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    startButtStyle: {
        alignSelf: 'center',
    },
    descriptionAndButt: {
        background: '#ffe5e5',
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        marginTop: '20%',
        marginBottom: '5%',
    }
});
