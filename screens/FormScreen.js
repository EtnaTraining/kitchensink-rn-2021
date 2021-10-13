import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function FormInputsScreen(props) {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [fullName, setFullName] = React.useState({ name: '', surname: '' });

  const inputNameRef = useRef();
  const changeFocus = () => {
    inputNameRef.current.focus();
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFullName({ ...fullName, name: text })}
        value={fullName.name}
        placeholder="Inserisci il tuo nome"
        ref={inputNameRef}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFullName({ ...fullName, surname: text })}
        value={fullName.surname}
        placeholder="Inserisci il tuo cognome"
        onSubmitEditing={() =>
          alert('Welcome ' + fullName.surname + ' ' + fullName.name)
        }
      />
      <Text>
        Welcome {fullName.name}, {fullName.surname}
      </Text>
      <Button onPress={changeFocus} title="Focus on name" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 20,
  },
});
