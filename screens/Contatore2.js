import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CounterContext } from '../counter-context';

function Contatore2() {
  console.log('rendering Contatore');
  const { count, increment, decrement, reset } =
    React.useContext(CounterContext);
  // const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        {count}
      </Text>
      <View
        style={{
          marginTop: 30,

          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}
      >
        <Button
          title="+"
          onPress={() => {
            // setCount(count + 1);
            increment();
            console.log(count);
          }}
        />
        <Button
          title="-"
          onPress={() => {
            // setCount(count - 1);
            decrement();
            console.log(count);
          }}
        />
        <Button
          title="reset"
          onPress={() => {
            // setCount(0);
            reset();
            console.log(count);
          }}
        />
      </View>
    </View>
  );
}

export default Contatore2;
