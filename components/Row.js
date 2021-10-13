import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';

function Row(props) {
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="coral">
      <View style={styles.row}>
        <Text style={styles.text}>{props.text}</Text>
        <Entypo
          name="chevron-right"
          size={24}
          color="black"
          style={{ paddingHorizontal: 5 }}
        />
      </View>
    </TouchableHighlight>
  );
}

Row.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  row: {
    height: 50,
    alignItems: 'center',
    // paddingLeft: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    // backgroundColor: 'blue',
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 5,
    fontSize: 16,
  },
});

export default Row;
