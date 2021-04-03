import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Colors } from 'react-native-paper';
import Pazar from './Pazar.js';
import App from '../LoginScreen.js'

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={{flex:1, flexDirection:'row'}}>
    <Searchbar
    style={{width:230, height:40}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
     <IconButton
    icon="format-list-bulleted"
    color={'#e51837'}
    size={25}
    onPress={() => console.log([App])}
  />
  <IconButton
    icon="grid"
    color={'#e51837'}
    size={25}
    onPress={() => console.log([App])}
  />
  <IconButton
    icon="collage"
    color={'#e51837'}
    size={25}
    onPress={() => console.log([App])}
  />
    </SafeAreaView>
  );
};

export default MyComponent;