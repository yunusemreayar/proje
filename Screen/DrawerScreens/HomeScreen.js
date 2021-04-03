
import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Listpage from './Listpage.js'

const HomeScreen = () => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
          }}> 
          
          <Listpage />
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;