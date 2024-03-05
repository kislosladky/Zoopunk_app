import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';


const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions]= useState([])
    const [score, setScore]= useState(0)
    const [isLoading, setIsLoading]= useState(false)

    const getQuiz = async () => {
        setIsLoading(true)
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    };

    useEffect(() => {
        getQuiz();
    }, []);

    const handleNextPress=()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }

    const generateOptionsAndShuffle=(_question)=>{
        const options= [..._question.incorrect_answers]
        options.push(_question.correct_answer)

        shuffleArray(options)

        return options
    }

    const handlSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        if(ques!==9){
            setQues(ques+1)
            setOptions(generateOptionsAndShuffle(questions[ques+1]))
        }
        if(ques===9){
            handleShowResult()
        }
    }

    const handleShowResult=()=>{
        navigation.navigate('QuizResult', {
            score: score
        })
    }

    return (
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.82)"}}>
            <View style={styles.container}>
                {isLoading ? <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                    <Text style={{fontSize:32, fontWeight:'700'}}>LOADING...</Text>
                </View> : questions && (

                    <View style={styles.parent}>


                            <View style={styles.top}>
                                <Text style={styles.question}>{decodeURIComponent(questions[ques].question)}</Text>
                            </View>

                        <View style={styles.options}>

                            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[0])}>
                                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[1])}>
                                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[2])}>
                                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[3])}>
                                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ImageBackground>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    top: {
        marginVertical: 16,
        backgroundColor: '#DEF1FF',
        padding: 10,
        width: '100%',
        height: '30%',
        borderRadius: 20,
        justifyContent: 'center',
        elevation: 10,
        overflow:'scroll',
        marginTop: '35%',
    },
    options: {
        marginVertical: 16,
        flex: 1,
        elevation: 10,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 24,
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignSelf: 'center',
        color: '#404040',
        fontFamily: 'monserratBold',
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: '#404040',
        fontFamily: 'monserratBold',
    },
    optionButtom: {
        marginBottom: '3%',
        elevation: 10,
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#F19999',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%',
    },
    elevationHolder:{
        elevation: 10,
    }
});

