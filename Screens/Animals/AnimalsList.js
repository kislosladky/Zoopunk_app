import React, {Component, useEffect, useRef, useState} from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity, Image, View, TextInput, Dimensions, Keyboard, Alert, Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const url = 'http://192.168.31.137:8080/animal/all'
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
// http://192.168.43.134:8080/animals
export default class AnimalsList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount = async () => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        isLoaded: true,
                        items: result.animals
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error){
            return (<Text>{'\n'}{'\n'}{'\n'}иди нахуй по причине {error.message}</Text>)
        } else if(!isLoaded){
            return (<Text>{'\n'}{'\n'}{'\n'}иди нахуй по причине просто так шутка жди</Text>)
        } else{
            console.log(items)
            return (
                <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="contain"
                                 style={styles.backGround}>
                    <View style={styles.head}>
                        <MainComponent data={items} />
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <FlatList
                            data={items}
                            numColumns={1}

                            style={{width:'100%'}}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => (
                                <ColoredItem name={item.name} imgpath={item.imgpath} description={item.description} isLast={index === items.length - 1}/>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ImageBackground>
            )
        }
    }
}

class ColoredItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: getRandomPastelColor()
        };
    }

    render() {
        const { name, imgpath, isLast, description } = this.props;
        return (
            <SenderComponent name={name} description={description} img={imgpath} isLast={isLast} color={getRandomPastelColor()}/>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    findBar: {
        position: 'relative',
        display: 'block',
        zIndex: 99,
        elevation: 10,
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.7,
        backgroundColor: 'white',
        borderColor: "#DFFBCE",
        borderWidth: 2,
        height: 40,
        borderRadius: 20,
        marginTop: Dimensions.get('window').width * 0.03,
        textAlign: "center"
    },
    backGround:{
        // position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 30,
        backgroundColor:"white",
        top:0,
        left:0,
    },

    flatlistItems: {
        marginBottom: Dimensions.get('window').width * 0.25,
        backgroundColor:"rgba(0,100,0)",
        // Dimensions.get('window').width,
        paddingBottom: Dimensions.get('window').width * 0.24,

    },
    head:{
        backgroundColor:'white',
        paddingBottom: Dimensions.get('window').width * 0.03,
        paddingTop: Dimensions.get('window').width * 0.07,
        elevation: 10
    },
    main:{
    }
});

let lastColorIndex = -1;

function getRandomPastelColor() {
    const pastelColors = [
        '#FFC3C0', '#FFEBCC', '#D1E9CE', '#A2D2FF', '#B5EAD7',
        '#E6B8CA', '#FFE5CC', '#F0F0C9',
        '#BBDED6', '#FDE2E4', '#85b5e3', '#FFD6A5', '#B5D3E7',
        '#F8D7DA', '#FFD6A4', '#CFF4D2', '#E3CEF6', '#B7E8F5',
        '#FFB5D0', '#E4D9FF', '#F7D6E0', '#FAD5AA', '#B5CFFA',
        '#D4F5F3', '#FFE5E2', '#F3F9D2', '#FFEF96',
        '#B5EAD7', '#C8E6C9', '#FFF59D', '#FFCCBC', '#B2DFDB',
        '#FFE0B2', '#ef85dd', '#FFAB91', '#FFE082', '#B2EBF2',
        '#E1BEE7', '#FFD180', '#C5E1A5', '#B2EBF2', '#EDE7F6',
        '#FFECB3', '#CFD8DC', '#FFF9C4', '#EF9A9A', '#F48FB1',
        '#CE93D8', '#FFCC80', '#FFAB91', '#B2DFDB', '#FF8A80',
        '#F48FB1', '#B3E5FC', '#B2DFDB', '#FFAB91', '#FFCC80',
        '#C5E1A5', '#FFE082', '#FF8A80', '#B2EBF2', '#F48FB1',
        '#FFD180', '#8fc4dc', '#FFAB91', '#FFCC80', '#B2DFDB',
        '#FFE082', '#C5E1A5', '#FFAB91', '#B2DFDB', '#FFCC80',
        '#B2EBF2', '#FF8A80', '#F48FB1', '#B3E5FC', '#B2DFDB',
        '#FFAB91', '#FFCC80', '#C5E1A5', '#FFD180', '#CFD8DC',
        '#FFAB91', '#FFCC80', '#B2DFDB', '#FFE082', '#C5E1A5',
        '#FFAB91', '#B2DFDB', '#FF8A80', '#F48FB1', '#B3E5FC',
        '#B2DFDB', '#FFAB91', '#FFCC80', '#C5E1A5', '#FFD180'
    ];

    let currentIndex;
    do {
        currentIndex = Math.floor(Math.random() * pastelColors.length);
    } while (currentIndex === lastColorIndex);

    lastColorIndex = currentIndex;
    return pastelColors[currentIndex];
}
function SenderComponent({ img, description, name, isLast, color}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{
                alignSelf:'center',
                elevation: 10,
                minWidth:200,
                width: 250,
                height: 200,
                backgroundColor: getRandomPastelColor(),
                borderRadius: 20,
                marginTop: "5%",
                marginBottom: isLast ? '55%' : 0,
                alignItems: "center",
                marginHorizontal: 6,
            }}
            onPress={() => navigation.navigate('CurrentAnimal',  {photos: toArray(img), description: description, color: color})}>
                <Image source={{ uri: img }} style={{width: "100%", height: "75%", borderRadius:20, borderTopRightRadius:20}}/>
                <Text style={{
                    textAlign: 'center', paddingTop: 9, paddingVertical: 4, paddingHorizontal: 5,
                    fontFamily: 'monserratBold', color: '#404040', fontSize: 18, alignSelf: 'center'}}>
                    {name}
                </Text>
        </TouchableOpacity>
    );
}
function toArray(...args) {
    return args;
}

function MainComponent({data}) {

    return (
        <View>
            <SearchComponent data={data} />
        </View>
    );
}

function SearchComponent({ data }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const navigation = useNavigation();
    const textInputRef = useRef(null);

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            Alert.alert('Упси-вупси', 'Пустого животного у нас нет');
            return;
        }

        const foundElements = findElement(searchQuery, data);

        if (foundElements.length > 0) {
            setSearchResults(foundElements);
            navigation.navigate('FoundAnimal',  {items: foundElements})
            // Alert.alert('Success', `Elements with name "${searchQuery}" found!`);
        } else {
            setSearchResults([]);
            Alert.alert('Упси-вупси', `Кажется, у нас нет "${searchQuery}"`);
        }

        // Очищаем строку поиска
        setSearchQuery('');
    };

    const findElement = (name, array) => {
        const query = name.toLowerCase();
        return array.filter(item => item.name.toLowerCase().includes(query));
    };

    const handleTextInputFocus = () => {
        setIsFocused(true);
    };

    const handleTextInputBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        // Установка курсора по центру при монтировании компонента
        if (textInputRef.current) {
            textInputRef.current.setNativeProps({
                selection: { start: searchQuery.length, end: searchQuery.length }
            });
        }
    }, [searchQuery]);

    const handleTextInputPress = () => {
        Keyboard.dismiss();
        navigation.setOptions({ tabBarStyle: { display: 'none' } });
        if (textInputRef.current) {
            textInputRef.current.blur(); // Снятие фокуса при нажатии на TextInput
        }
    };

    useEffect(() => {
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            if (textInputRef.current) {
                textInputRef.current.blur(); // Снятие фокуса при исчезновении клавиатуры
            }
            navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        });
        return () => {
            keyboardDidHideListener.remove();
        };
    }, [navigation]);

    return (
        <View>
            <TextInput
                ref={textInputRef}
                onTouchStart={handleTextInputPress}
                onFocus={handleTextInputFocus}
                onBlur={handleTextInputBlur}
                style={{
                    elevation: 10,
                    alignSelf: 'center',
                    textAlign: 'center',
                    width: '70%',
                    backgroundColor: 'white',
                    borderColor: "#DFFBCE",
                    borderWidth: 2,
                    height: 40,
                    borderRadius: 20,
                    marginTop: '3%',
                }}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="я хочу посмотреть..."
                onSubmitEditing={handleSearch}
            />
        </View>
    );
}

