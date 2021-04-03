import React, { Component } from 'react';  
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert } from 'react-native';  
  
export default class Pazar extends Component {  
  state= {
    responsev:[],
    };

    apiveri(){
      fetch('GİZLİ', {
        method: 'GİZLİ',
        headers: {
           'GİZLİ': 'GİZLİ',
           'GİZLİ':'GİZLİ',
        },
        body:(JSON.stringify({
              "jsonFormat": 1,
              "querySqlText": "GİZLİ",
              "maxCount": -1
           }))
     })
  //admin:logo123:1:1:TRTR
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(JSON.stringify(responseJson['rows'][1]))
        this.setState({
          
          responsev: responseJson['rows']
         });
    })
    .catch((error) => {
      //setLoading(false);
      console.error(error);
    });
    
  }

  
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
    //handling onPress action  
    getListViewItem = (item) => {  
        Alert.alert(item.CODE); 
    }  
  
    render() { 
      this.apiveri()
        const {responsev} =this.state; 
        return (  
            <View style={styles.container}> 
                <FlatList 

                    data={ 
                     responsev
                  }   
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.DESCRIPTION}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        );  
    }  
}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  },  
})