
import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import SearchBar from './SearchBar1.js'
import Deneme from './Deneme.js';


const SettingsScreen = () => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
          }}> 
          <SearchBar />
          <Deneme />
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default SettingsScreen;