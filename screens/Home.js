import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Row from '../components/Row';

const samples = [
  { title: 'Dettagli', route: 'Details', extraData: { id: 43, name: 'Pippo' } },
  { title: 'Gestione immagini', route: 'ImageScreen' },
  { title: 'Contatore', route: 'Contatore' },
  { title: 'ScrollList', route: 'ScrollListScreen' },
  { title: 'Elenco Immagini da rete', route: 'ImageListFromNetwork' },
  { title: 'Elenco Immagini con refresh', route: 'RefreshingImageList' },
  { title: 'Form Sample', route: 'InputForm' },
  { title: 'Weather App', route: 'Weather' },
  { title: 'Esempio SQLite', route: 'SQLite' },
  { title: 'Simple SQLite', route: 'SQLite2' },
  { title: 'Contantore con Context', route: 'Contatore2' },
];

// export default function Home(props) {
//   const navigation = props.navigation;
//   return (
//     <View>
//       <Row
//         text="Gestione immagini"
//         onPress={() => navigation.navigate('ImageScreen')}
//       />
//       <Row text="Contatore" onPress={() => navigation.navigate('Contatore')} />
//       <Row
//         text="ScrollList"
//         onPress={() => navigation.navigate('ScrollListScreen')}
//       />
//       <Row
//         text="Elenco Immagini da rete"
//         onPress={() => navigation.navigate('ImageListFromNetwork')}
//       />
//     </View>
//   );
// }

export default function Home({ navigation }) {
  // const navigation = props.navigation;
  const _renderRow = ({ item }) => (
    <Row
      text={item.title}
      onPress={() => navigation.navigate(item.route, item.extraData)}
    />
  );
  return (
    <FlatList
      data={samples}
      renderItem={_renderRow}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
