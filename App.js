import {useState} from "react";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import Navigation from "./Navigation/MainNavigation";

const fonts = () => Font.loadAsync({
  'monserratLight': require('./Styles/Fonts_MontserratAll/MontserratAlternates-LightItalic.ttf'),
  'monserratBold': require('./Styles/Fonts_MontserratAll/MontserratAlternates-Bold.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <Navigation/>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}/>)
  }
}
