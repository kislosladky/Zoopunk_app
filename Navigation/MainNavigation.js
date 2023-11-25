import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MapScreen from "../Screens/Map/MapScreen";
import UserMainScreen from "../Screens/User/UserMainScreen";
import AnimalsList from "../Screens/Animals/AnimalsList";
import CurrentAnimal from "../Screens/CurrentAnimal/CurrentAnimalScreen";
import {NavigationContainer} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Setting from "../Screens/User/SettingScreen";

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
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="CurrentAnimal" component={CurrentAnimal} screenOptions={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;


