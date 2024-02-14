import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    FlatList,
    TouchableOpacity, Image, View, TextInput,
} from 'react-native';
import {SearchBar} from "react-native-screens";
const DATA = [
  {
    id: '1',
    img: require("../../assets/FlightDog.jpeg"),
    title: 'Египетская летучая собака',
    description: "Египетская летучая собака или нильский крылан. Область распространения простирается от Египта и Аравийского полуострова до юга Турции и Кипра. Животное часто заводят в качестве домашнего питомца, поскольку оно общительно и легко приручаемо. Продолжительность жизни до 30 лет.",
    bg: "#ffd1d1",
    photos: [
  {
    id: '1',
    img: require("../../assets/FlightDog2.jpeg"),
  },
  {
    id: '2',
    img: require("../../assets/FlightDog3.jpeg"),
  },
  {
    id: '3',
    img: require("../../assets/FlightDog4.jpeg"),
  },
  {
    id: '4',
    img: require("../../assets/FlightDog.jpeg"),
  }
]
  },
  {
    id: '2',
    title: 'Фенек',
    bg: '#bcffb9',
    description: "Фенек – самая маленькая африканская лисичка. В зоопарках мира этот вид представлен мало и в неволе размножается очень редко. Распространен в Северной Африке, на Синайском полуострове. Внесен в Международную Красную книгу, в Приложение II Конвенции о международной торговле.",
    img: require("../../assets/Fenek.jpeg"),
    photos: [
      {
        id: '1',
        img: require("../../assets/Fenek.jpeg"),
      },
      {
        id: '2',
        img: require("../../assets/Fenek1.jpeg"),
      },
      {
        id: '3',
        img: require("../../assets/Fenek2.jpeg"),
      },
      {
        id: '4',
        img: require("../../assets/Fenek3.jpeg"),
      },
      {
        id: '5',
        img: require("../../assets/Fenek4.jpeg"),
      },
      {
        id: '6',
        img: require("../../assets/Fenek5.jpeg"),
      }
    ]
  },
  {
    id: '3',
    title: 'Бурый медведь',
    bg: '#f9ffae',
    description: "Бурый медведь – второй по массивности хищник на планете. Распространен в Европе, Азии и Северной Америке от северной до южной границы лесов. Территория обитания огромна, но во многих районах он истреблен. В Альпах Австрии остались единицы, в горах Испании и Италии несколько десятков, в США сохранился только в пяти штатах. И лишь на Аляске, Камчатке и в Сибири численность еще довольна высока.",
    img: require("../../assets/Bear.webp"),
  },
  {
    id: '4',
    title: 'Кошачий лемур',
    bg: '#e5d0ff',
    description: "Кольцехвостый лемур, или кошачий лемур, или катта – единственный лемур, ведущий наземный образ жизни, предпочитая скальные участки. Встречается на юге и юго-западе острова Мадагаскар на сухих открытых пространствах и в лесах. Внесен в Красную книгу «Международного союза охраны природы».",
    img: require("../../assets/Lemur.jpeg"),
  },
  {
    id: '5',
    title: 'Красный ибис',
    bg: '#ffc7a1',
    description: "Распространен на севере Южной Америки, от западной Венесуэлы через Гайану вплоть до устья Амазонки в Бразилии, а также на острове Тринидад. Алые ибисы считаются самыми яркими птицами на планете, при этом их птенцы появляются на свет бурыми и постепенно меняют цвет только на втором году жизни.",
    img: require("../../assets/RedIbis.jpeg"),
  },
  {
    id: '6',
    title: 'Малый ожерловый попугай',
    bg: '#ffc7a1',
    description: "У вида несколько названий: малый ожереловый попугай, индийский кольчатый попугай, ожереловый попугай Крамера.",
    img: require("../../assets/SmallOzherlParr.jpeg"),
  },
  {
    id: '7',
    title: 'Журавль-красавка',
    bg: '#ffc7a1',
    description: "Распространен в Евразии. Зимует в районах Северо-Восточной Африки, Пакистане, Индии. Самый маленький журавль в мире. Изящество и красота этой птицы отражены в видовом названии. На русском языке – журавль-красавка, на латыни – журавль-девушка.",
    img: require("../../assets/ZhuravlKrasavka.jpeg"),
  },
    {
        id: '8',
        title: 'Ангел-полумесяц',
        bg: '#ffc7a1',
      description: "Коллекция рыб и возможность её экспонирования появились с переездом на новую территорию. Экспозиция «Ночной мир» позволила зоопарку собрать внушительную коллекцию рыб. У посетителей зоопарка есть возможность понаблюдать за рыбами удивительной красоты. В зоопарке представлено 254 вида рыб.",
        img: require("../../assets/AngelFish.jpeg"),
    },
    {
        id: '9',
        title: 'Капский даман',
        bg: '#ffc7a1',
      description: "Вид афроазиатских млекопитающих, имеющий поверхностное сходство с кроликом. Имеют короткие уши и хвост. Распространены от Сирии, Израиля и Северо-Восточной Африки до ЮАР. Живут в областях саванн или в травяных угодьях. Часто живут в скалистых областях и также их можно обнаружить в норах других животных. Капские даманы – небольшие животные, внешне похожие на грызунов. Даманы, несмотря на кажущуюся обычность внешнего вида, являются одними из самых удивительных животных на планете. Они – ближайшие родственники слонов.",
        img: require("../../assets/KapsDaman.jpeg"),
    },
];


export default function AnimalsList ({navigation}){
  return(
      <SafeAreaView>
        <ImageBackground source={require("../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.87)"}}>
          <View style={{marginBottom: '5%'}}>
           <View style={{backgroundColor:'white', paddingBottom:'3%', elevation: 10}}>
               <TextInput
                   maxLength={40}
                   style={{
                       position: 'relative',
                       display:'block',
                       zIndex: 99,
                       elevation: 10,
                       alignSelf:'center',
                       width:'70%',
                       backgroundColor:'white',
                       borderColor: "#DFFBCE",
                       borderWidth: 2,
                       height: 40,
                       borderRadius: 20,
                       marginTop: '3%',
                       textAlign: "center"}}
                   placeholder="Дагестанский тур"/>
           </View>

            <FlatList
                data={DATA}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (

                    <TouchableOpacity style={{elevation: 10, width: "45%", height: 200, backgroundColor: item.bg, borderRadius: 20, margin: "2%", alignItems: "center", marginTop: '5%'}} onPress={() => navigation.navigate('CurrentAnimal',  {title: item.title, img: item.img, description: item.description, photos: item.photos})} activeOpacity={0.9}>
                      <Image source={item.img} style={{width: "100%", height: "75%", borderTopLeftRadius:20, borderTopRightRadius:20}}/>
                      <View style={{justifyContent: 'center', borderRadius:20, marginTop: '-10%', width: '100%', backgroundColor: item.bg, alignContent: 'center'}}>
                        <Text style={{textAlign:'center', paddingTop: 9, paddingVertical: 4, paddingHorizontal: 5, fontFamily: 'monserratBold', color: '#404040', fontSize: 18, alignSelf:'center'}} >{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                // contentContainerStyle={{alignItems: "center"}}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
