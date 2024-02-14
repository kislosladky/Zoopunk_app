import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MapScreen from "../Screens/Map/MapScreen";
import UserMainScreen from "../Screens/User/UserMainScreen";
import AnimalsList from "../Screens/Animals/AnimalsList";
import Quizzes from "../Screens/Quizzes/QuizzScreen";
import QuizHome from "../Screens/Quizzes/Home";
import QuizResult from "../Screens/Quizzes/Result";
import CurrentAnimal from "../Screens/CurrentAnimal/CurrentAnimalScreen";
import {NavigationContainer} from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import Setting from "../Screens/User/SettingScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return(
    <Tab.Navigator


      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {height: 90},
        tabBarLabelStyle:{fontSize: 0},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;


          if (route.name === 'Animals') {
            iconName = focused
              ? 'paw'
              : 'paw';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map';
          } else if (route.name === 'User') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={40} color={color} />;
        },
        tabBarActiveTintColor: '#FFAC5F',
        tabBarInactiveTintColor: '#6C6C6C',
      })}>
      {/*tabBarStyle: {height: 70}, activeTintColor: '#FFAC5F', inactiveTintColor: '#6C6C6C',*/}
      {/*})}>*/}
      <Tab.Screen name="Animals" component={AnimalsList} style={{fontSize:20}} />
      <Tab.Screen name="Map" component={MapScreen}/>
      <Tab.Screen name="User" component={UserMainScreen} />
    </Tab.Navigator>
  );
}


function Navigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="CurrentAnimal" component={CurrentAnimal} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="Quizzes" component={Quizzes} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="QuizResult" component={QuizResult} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="QuizHome" component={QuizHome} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="Setting" component={Setting} screenOptions={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;


