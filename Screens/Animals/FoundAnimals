import {
    FlatList, Image,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableOpacity,
} from "react-native";
import {ImageStyles} from "../../Styles/ImageStyles";
import React, {Component} from "react";
import {useNavigation} from "@react-navigation/native";

// const photos = ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/275px-Fennec_Fox_Vulpes_zerda.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/275px-Fennec_Fox_Vulpes_zerda.jpg']
export default function FoundAnimals({ route }) {
    const { items } = route.params;
    return (
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={ImageStyles.backgroundImg}>
            <SafeAreaView style={{
                flex: 1,
                marginHorizontal: 16,
                marginTop:'6%',
                alignItems:'center'
            }}>
                <FlatList
                    style={{height: '100%', width:'100%'}}
                    data={items}
                    renderItem={({ item }) => (
                        <ColoredItem name={item.name} description={item.description} imgpath={item.imgpath}/>
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ImageBackground>
    );
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
function SenderComponent({ img, description, name, isLast, color}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{
                alignSelf:'center',
                elevation: 10,
                minWidth:200,
                width: '90%',
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
function toArray(...args) {
    return args;
}
