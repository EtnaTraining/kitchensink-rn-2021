import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import DetailsScreen from './screens/Details';
import StyleExample from './screens/StyleExample';
import ImageScreen from './screens/Image';
import Contatore from './screens/Contatore';
import ScrollListScreen from './screens/ScrollList';
import ImageListFromNetwork from './screens/ImageListFromNetwork';
import InputForm from './screens/FormScreen';
import WeatherScreen from './screens/Weather';
import RefreshingImageList from './screens/RefreshingImageList';
import SQLiteScreen from './screens/SQLite';
import SQLite2Screen from './screens/SQLite2';
import Contatore2 from './screens/Contatore2';

import { CounterProvider } from './counter-context';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/favicon.png')}
      />
      <Text
        style={{
          fontSize: 24,
          paddingHorizontal: 5,
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Home
      </Text>
    </>
  );
}

function HomeStack() {
  return (
    <CounterProvider>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitle: () => <LogoTitle />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ id: 42 }}
          options={{
            headerRight: () => (
              <Button title="Info" onPress={() => alert('OK')} />
            ),
          }}
        />
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
        <Stack.Screen
          name="SQLite"
          component={SQLiteScreen}
          options={{ title: 'SQLite example' }}
        />
        <Stack.Screen
          name="SQLite2"
          component={SQLite2Screen}
          options={{ title: 'SQLite 2 simple' }}
        />
        <Stack.Screen
          name="Contatore2"
          component={Contatore2}
          options={{ title: 'Contatore con Context' }}
        />
      </Stack.Navigator>
    </CounterProvider>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // console.log('tab focused', route.name);

            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Weather') {
              iconName = focused ? 'weather-sunny' : 'weather-rainy';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Weather" component={WeatherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
