import React, { useState } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

function SQLite2Screen() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM items',
          [],
          (_, { rows: { _array } }) => {
            console.log(_array);
            setList(_array);
          }
          // (error) => {
          //   console.log('some error occurred', error);
          // }
        );
      },
      (error) => {
        console.log('some error occurred', error);
      }
      // () => {
      //   console.log('ok apposto');
      // }
    );
  }, []);

  const add = (text) => {
    // is text empty?
    if (text === null || text === '') {
      return false;
    }

    db.transaction((tx) => {
      tx.executeSql('insert into items (done, value) values (0, ?)', [text]);
      tx.executeSql('select * from items', [], (_, { rows }) =>
        // console.log(JSON.stringify(rows));
        setList(rows._array)
      );
    });
  };

  return (
    <View>
      {list.map((item) => (
        <Text
          style={{
            padding: 10,
            borderColor: 'blue',
            borderBottomWidth: 1,
            fontSize: 24,
          }}
          key={item.id}
        >
          {item.value}
        </Text>
      ))}
      <Button title="add random todo" onPress={() => add('ciao mondo')} />
    </View>
  );
}

export default SQLite2Screen;
