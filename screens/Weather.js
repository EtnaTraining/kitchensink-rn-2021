import React, { useState, useEffect, useReducer } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import SearchInput from '../components/SearchInput';
import { getWeather } from '../util/api';

function WeatherScreen() {
  // const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('Catania');
  // const [loading, setLoading] = useState(false);

  // const [state, setState] = useState({
  //   weather: {},
  //   loading: false,
  //   location: 'Catania',
  //   error: ''
  // });

  const reducer = (state, action) => {
    console.log('calling reducer', action.type);
    switch (action.type) {
      case 'LOADING':
        return { loading: true };
      case 'LOADING_COMPLETED':
        return {
          loading: false,
          weather: action.payload,
          error: false,
        };
      case 'LOADING_ERROR':
        return {
          loading: false,
          error: true,
          message: action.payload.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: false,
    location: 'Catania',
    temperature: 0,
    iconURL: 'http://openweathermap.org/img/wn/10d@2x.png',
    weather: {},
  });

  useEffect(() => {
    console.log('in useEffect');
    // setLoading(true);
    const loadingData = async () => {
      dispatch({ type: 'LOADING' });
      console.log('calling getWeather');
      try {
        const weatherData = await getWeather(location);
        dispatch({ type: 'LOADING_COMPLETED', payload: weatherData });
      } catch (error) {
        dispatch({ type: 'LOADING_ERROR', payload: weatherData });
      }
      // getWeather(location).then((data) => {
      //   // if (data.error) {
      //   //   setError(data.error);
      //   // } else {
      //   //   setWeather(data);
      //   //   setError('');
      //   // }
      //   setWeather(data);
      //   setLoading(false);
      // });
    };
    loadingData();
  }, [location]);

  console.log('rendering WeatherScreen');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ActivityIndicator animating={state.loading} color="white" size="large" />

      {!state.loading && (
        <View>
          {state.weather.error != undefined && (
            <Text style={[styles.largeText, styles.textStyle]}>
              {state.weather.error}
            </Text>
          )}

          {!state.weather.error && (
            <View>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${state.weather.icon}@2x.png`,
                  resizeMode: 'contain',
                }}
                style={styles.icon}
              />
              <Text style={[styles.largeText, styles.textStyle]}>
                {location}
              </Text>
              <Text style={[styles.smallText, styles.textStyle]}>
                {state.weather.description}
              </Text>
              <Text style={[styles.largeText, styles.textStyle]}>
                {state.weather.temperature}
              </Text>
            </View>
          )}
          <SearchInput
            placeholder="Inserisci una città"
            onSubmit={setLocation}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
