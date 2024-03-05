import {
    FlatList, Image,
    ImageBackground,
    SafeAreaView, ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {ImageStyles} from "../../Styles/ImageStyles";
import React from "react";

// const photos = ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/275px-Fennec_Fox_Vulpes_zerda.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/275px-Fennec_Fox_Vulpes_zerda.jpg']
export default function CurrentAnimalScreen({ route }) {
    const { photos, description, color } = route.params;
    return (
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={ImageStyles.backgroundImg}>
            <SafeAreaView style={{
                flex: 1,
                marginHorizontal: 16,
                marginTop:'3%',
                alignItems:'center'
            }}>
                <FlatList
                    data={photos}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    alwaysBounceHorizontal={true}
                    renderItem={({item}) => (
                        <TouchableOpacity activeOpacity={1} disabled={true}>
                            <PhotoCard photo={item}></PhotoCard>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{elevation: 10, backgroundColor:color, borderRadius: 20, width:'90%', minHeight:'40%', maxHeight:'40%', padding:'5%', overflow:'hidden', marginBottom:'10%', marginTop:'3%'}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{fontSize: 17, fontFamily: 'monserratMedium'}}>
                            {description}
                        </Text>
                    </ScrollView>
                </View>

                <View style={{elevation: 10,width:'90%', marginBottom:'15%', borderRadius:20}}>
                    <TouchableOpacity style={{width: '100%'}} activeOpacity={0.3}>
                        <Text style={{padding: 7, color:'#404040', backgroundColor:'#9eeafd', borderRadius: 20, fontSize: 18, fontFamily:'monserratBold', textAlign:'center'}}>
                            Проложить маршрут до животного
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
function PhotoCard({ photo }) {
    return (
        <View style={{
            width: 270,
            height: 250,
            borderRadius: 20,
            marginLeft: 20,
            marginTop: 20
        }}>
            <Image source={{ uri: photo }} style={{ width: '100%', height: '100%', borderRadius: 20 }} ></Image>
        </View>
    );
}


