import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomePage from "../Screens/WelcomePage";
import MapScreen from "../Screens/Map/MapScreen";
import UserMainScreen from "../Screens/User/UserMainScreen";
import AnimalsList from "../Screens/Animals/AnimalsList";
import Destinations from "../Screens/User/Destinations/Destinations";
import PathsMain from "../Screens/User/Paths/PathsMain";
import Quizzes from "../Screens/Quizzes/QuizzScreen";
import QuizHome from "../Screens/Quizzes/Home";
import QuizResult from "../Screens/Quizzes/Result";
import CurrentAnimal from "../Screens/CurrentAnimal/CurrentAnimalScreen";
import {NavigationContainer} from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return(
      <Tab.Navigator
          screenOptions={{
              tabBarStyle: {height: 70}, tabBarActiveTintColor: '#FFAC5F', tabBarInactiveTintColor: '#6C6C6C',
          }}>
      <Tab.Screen name="Animals" component={AnimalsList} options={{title: 'Животные', tabBarIcon: ({size, color}) => <Ionicons name="paw-outline" size={24} color="black" />}}/>
      <Tab.Screen name="Map" component={MapScreen} options={{title: 'Карта', tabBarIcon: ({size, color}) => <Ionicons name="map-outline" size={24} color="black" />}}/>
      <Tab.Screen name="User" component={UserMainScreen} options={{title: 'Пользователь', tabBarIcon: ({size, color}) => <FontAwesome name="user-o" size={24} color="black" />}}/>
    </Tab.Navigator>
  );
}


function Navigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="User" component={UserMainScreen}/>
        <Stack.Screen name="Animals" component={AnimalsList} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="CurrentAnimal" component={CurrentAnimal} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="Destinations" component={Destinations} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="Paths" component={PathsMain} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="Quizzes" component={Quizzes} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="QuizResult" component={QuizResult} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="QuizHome" component={QuizHome} screenOptions={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;


