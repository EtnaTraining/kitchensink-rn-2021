import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

function ImageScreen() {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Static Image</Text>
      <Image
        source={require('../assets/trichecos.jpg')}
        style={{ width: 350 }}
        resizeMode="stretch"
      />
      <Button
        title={visible ? 'Hide' : 'Show'}
        onPress={() => setVisible(!visible)}
      />
      {visible && (
        <View>
          <Text>Remote Image</Text>
          <Image
            source={{ uri: 'https://picsum.photos/200/300', cache: 'reload' }}
            style={{ width: 200, height: 300 }}
          />
        </View>
      )}
    </View>
  );
}

export default ImageScreen;
