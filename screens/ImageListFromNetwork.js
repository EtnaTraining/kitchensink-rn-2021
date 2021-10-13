import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

function ImageListFromNetwork() {
  const [visible, setVisible] = React.useState(true);
  const [data, setData] = React.useState([]);

  const getImagesFromNetwork = async () => {
    try {
      const response = await fetch(
        'https://picsum.photos/v2/list?limit=30&page=3'
      );
      const images = await response.json();
      return images;
    } catch (error) {
      console.error(error);
    }
  };

  // definire i cosiddetti SideEffects
  // UI = f(state, props) // pure functions
  useEffect(() => {
    console.log('carico dati dalla rete');
    getImagesFromNetwork().then((images) => setData(images));
  }, []);

  // setData(data);

  const imageList = data.map(function (item, index) {
    return (
      <Image
        key={index}
        source={{
          uri: item.download_url,
          cache: 'reload',
        }}
        style={{ height: 300 }}
      />
    );
  });

  let imageList2 = [];
  for (let i = 0; i < data.length; i++) {
    imageList2.push(
      <Image
        key={data[i].id}
        source={{ uri: data[i].download_url }}
        style={{ height: 300 }}
      />
    );
  }

  let imageList3 = [];
  data.forEach(function (item, index) {
    imageList3.push(
      <Image
        key={index}
        source={{
          uri: item.download_url,
          cache: 'reload',
        }}
        style={{ height: 250, marginBottom: 10 }}
      />
    );
  });
  console.log('rendering della scrollview');
  return (
    <ScrollView
      style={{ flex: 1 }}
      // contentContainerStyle={{ backgroundColor: 'red' }}
      pagingEnabled
    >
      {imageList3}
    </ScrollView>
  );
}

export default ImageListFromNetwork;
