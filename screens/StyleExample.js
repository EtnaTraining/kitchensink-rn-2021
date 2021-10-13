import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default function StyleExample(props) {
  const navigation = props.navigation;
  const message = Platform.OS == 'ios' ? 'from iOS' : 'from Android';

  const selection = Platform.select({
    ios: {
      fontSize: 24,
      color: 'red',
    },
    android: {
      fontSize: 22,
      color: 'blue',
    },
  });

  console.log('rendering component');
  console.log(selection);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={[styles.text]}>{'hello from ' + message}</Text>
      </View>
      <Button
        title="go to example screen"
        onPress={() => navigation.navigate('StylingExample2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // ...Platform.select({
    //   ios: {
    //     justifyContent: 'flex-start',
    //   },
    //   android: {
    //     justifyContent: 'flex-end',
    //   },
    // }),
  },
  box: {
    width: '80%',
    height: '50%',
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { x: 10, y: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.9,
      },
      android: {
        elevation: 13,
      },
    }),
  },
  text: Platform.select({
    ios: {
      fontSize: 24,
      color: 'black',
    },
    android: {
      fontSize: 22,
      color: 'blue',
    },
  }),
});
