import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

function DetailsScreen({ navigation, route }) {
  const [cognome, setCognome] = useState('Falsaperla');
  console.log(route);
  const { id, name } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Change Name" onPress={() => setCognome('Rossi')} />
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Cognome: {cognome}</Text>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.navigate('Details', {
            id: 44,
            saluto: 'GN - Good Night',
          })
        }
      />
      <Button
        title="Push a new Details... again"
        onPress={() =>
          navigation.push('Details', {
            id: 42,
            saluto: 'GM - Good Morning',
          })
        }
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailsScreen;
