import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const SearchInput = ({ placeholder, onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text) return;
    // passare il valore della textinput al chiamante
    setText('');
    onSubmit(text);

    console.log(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        // autoFocus
        style={styles.textInput}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        clearButtonMode="always"
      />
    </View>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});

export default SearchInput;
