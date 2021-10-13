import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import StyleExample from './screens/StyleExample';
import ImageScreen from './screens/Image';
import Contatore from './screens/Contatore';
import ScrollListScreen from './screens/ScrollList';
import ImageListFromNetwork from './screens/ImageListFromNetwork';
import InputForm from './screens/FormScreen';
import WeatherScreen from './screens/Weather';
import RefreshingImageList from './screens/RefreshingImageList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: 'Image Examples' }}
        />
        <Stack.Screen
          name="Contatore"
          component={Contatore}
          options={{ title: 'Contatore' }}
        />
        <Stack.Screen
          name="ScrollListScreen"
          component={ScrollListScreen}
          options={{ title: 'Lista di immagini' }}
        />
        <Stack.Screen
          name="ImageListFromNetwork"
          component={ImageListFromNetwork}
          options={{ title: 'Elenco di immagini da rete' }}
        />
        <Stack.Screen
          name="RefreshingImageList"
          component={RefreshingImageList}
          options={{ title: 'Elenco immagini con refresh da rete' }}
        />
        <Stack.Screen
          name="InputForm"
          component={InputForm}
          options={{ title: 'Input Form' }}
        />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{ title: 'Weather App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
