import React, { useState, useEffect } from 'react';
import { useColorScheme, Image , Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from './src/Utils/Images';
import Home from './src/HomeScreen';
import SplashScreen from './src/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/ProfileScreen';
import Onboarding from './src/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from './src/Utils/Color';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSplashFinished, setIsSplashFinished] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsSplashFinished(true);
    }, 2000);

    const checkAuthStatus = async () => {
      try {
        console.log("Ayee catcher");
      } catch (error) {
        console.log('Error in getting login status:', error);
      }

      setTimeout(() => {
      }, 2000);
    };

    checkAuthStatus();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false, tabBarVisible:false }} /> 
          <Stack.Screen name="Home" component={Home} options={{headerShown:false, tabBarVisible:false}} /> 
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarVisible:false }} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
