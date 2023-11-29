import {
    ImageBackground,
    SafeAreaView, StatusBar,
    StyleSheet,
    Text, TouchableOpacity, View,
} from "react-native";
import React, {useEffect, useState} from "react";
import QuizQuestion from "./Components/QuizQuestion"





const Quizz = () => {

    const[questions, setQuestions] = useState();
    const[ques, setQues] = useState(0);
    const[options, setOptions] = useState([]);
    const getQuiz=async()=> {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        generateOptionsAndShuffle(data.results[0]);

    };
    useEffect(() => {
        getQuiz();
    }, []);
    const generateOptionsAndShuffle=(_question)=>{
        const options=[..._question.correct_answer, ..._question_incorrect_answers];
        console.log(options);
    }
    const shuffleArray=(array)=> {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return(

        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
            <SafeAreaView style={styles.container}>

                    <View style={styles.question}>
                        <Text style={styles.questionText}>
                            {decodeURIComponent(questions[ques].question)}
                            aaa
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.optionButt}>
                        <Text style={styles.option}>
                            {decodeURIComponent(questions[0].question)}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButt}>
                        <Text style={styles.option}>Cool Option</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButt}>
                        <Text style={styles.option}>Cool Option</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButt}>
                        <Text style={styles.option}>Cool Option</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>

    )
}
export default Quizz

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        height: '100%',

    },
    question: {
        width: '100%',
        height: '30%',
        marginVertical: 16,
        backgroundColor: '#fff',
        fontSize: 32,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 6,
        overflow: 'scroll',
    },
    questionText: {
        fontSize: 32,
    },
    option:{
        fontSize: 24,
    },
    optionButt:{
        marginVertical: 6,
        paddingVertical: 12,
        backgroundColor: '#F19999',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    }

});
