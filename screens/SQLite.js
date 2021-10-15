import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase('wordlist.db');

db.transaction(
  (tx) => {
    tx.executeSql(
      'create table if not exists WORDS (ID integer primary key not null, VALUE text);'
    );
  },
  (error) => console.log(error),
  () => console.log('ok')
);

const _printDocumentPath = async () => {
  console.log('doc', FileSystem.documentDirectory);
  const dirInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory);
  const uri = dirInfo.uri;
  console.log(dirInfo);
  // return uri;
};

function SQLiteScreen({ navigation, route }) {
  const [word, setWord] = useState('');
  const [wordlist, setWordlist] = useState([]);

  React.useEffect(() => {
    _printDocumentPath();
    db.transaction(
      (tx) => {
        tx.executeSql('select * from WORDS', [], (_, { rows }) => {
          // console.log('row', rows._array);
          setWordlist(rows._array.map((item) => item.VALUE));
        });
      },
      (error) => console.log(error),
      () => {
        console.log('select executed');
        // setWordlist([...wordlist, word]);
        // setWord('');
      }
    );
  }, []);

  const _add = () => {
    db.transaction(
      (tx) => {
        tx.executeSql('insert into WORDS (VALUE) values (?)', [word]);
      },
      (error) => console.log(error),
      () => {
        setWordlist([...wordlist, word]);
        setWord('');
      }
    );
  };

  console.log('current word', word);
  console.log('wordlist', JSON.stringify(wordlist));

  return (
    <View>
      <TextInput
        autoFocus
        style={styles.input}
        placeholder="inserisci una parola"
        value={word}
        onChangeText={setWord}
        onEndEditing={() => _add()}
      />
      {wordlist.map((t, index) => (
        <Text key={index} style={styles.text}>
          {t}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { padding: 10, borderWidth: 1, borderColor: 'red' },
  text: {
    fontSize: 24,
    padding: 10,
  },
  container: {},
});

export default SQLiteScreen;
