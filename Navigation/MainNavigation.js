import React, { useEffect, useState } from 'react';
import {Keyboard, TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../Screens/Map/MapScreen';
import UserMainScreen from '../Screens/User/UserMainScreen';
import AnimalsList from '../Screens/Animals/AnimalsList';
import Quizzes from '../Screens/Quizzes/QuizzScreen';
import QuizHome from '../Screens/Quizzes/Home';
import QuizResult from '../Screens/Quizzes/Result';
import CurrentAnimal from '../Screens/CurrentAnimal/CurrentAnimalScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Setting from '../Screens/User/SettingScreen';
import RegistrationPage from '../Screens/RegistrationPage';
import Destinations from '../Screens/User/Destinations/Destinations';
import FoundAnimals from "../Screens/Animals/FoundAnimals";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { height: '10%', position: 'absolute' },
                tabBarLabelStyle: { fontSize: 0 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Animals') {
                        iconName = focused ? 'paw' : 'paw';
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
            })}
        >
            <Tab.Screen name="Animals" component={AnimalsList} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="User" component={UserMainScreen} />
        </Tab.Navigator>
    );
}

function Navigation() {
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
                <Stack.Screen name="HomeScreen">
                    {(props) => <HomeScreen {...props} keyboardOpen={keyboardOpen} />}
                </Stack.Screen>
                <Stack.Screen name="CurrentAnimal" component={CurrentAnimal} />
                <Stack.Screen name="FoundAnimal" component={FoundAnimals} />
                <Stack.Screen name="Quizzes" component={Quizzes} />
                <Stack.Screen name="QuizResult" component={QuizResult} />
                <Stack.Screen name="QuizHome" component={QuizHome} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Destinations" component={Destinations} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;

