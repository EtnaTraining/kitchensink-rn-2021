import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Button,
  FlatList,
} from 'react-native';

const base_url = 'https://picsum.photos/v2/list';
const random_url = 'https://picsum.photos/seed/picsum/200/300';

function ImageListScreen() {
  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getImageList = async (page) => {
    let url = base_url;
    if (page != undefined) {
      url = base_url + '?page=' + page;
    }
    try {
      const response = await fetch(url);
      const images = await response.json();
      return images;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImageList(page).then((images) => setData(images));
  }, [page]);

  const renderImage = ({ item }) => (
    <Image
      key={item.id}
      source={{
        uri: `https://picsum.photos/id/${item.id}/400/300`,
      }}
      style={{ height: 300, marginBottom: 10 }}
    />
  );
  console.log('rendering list 3 ', page, refreshing);
  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      renderItem={renderImage}
      refreshing={refreshing}
      onRefresh={() => {
        // setRefreshing(true);
        setPage(page + 1);
        // setRefreshing(false);
      }}
    />
  );
}

export default ImageListScreen;
