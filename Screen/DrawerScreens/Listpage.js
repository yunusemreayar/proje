import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
  AppRegistry, FlatList, Modal, Pressable,
  StyleSheet, Text, View, Alert, TouchableOpacity, Image, ToastAndroid
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Colors } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';


const Listpage = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [colum, setColum] = useState(true);
  const [heights, setHeights] = useState(60);
  const [flexDirections, setflexDirections] = useState('row');
  const [widths, setwidths] = useState(true);
  const [widths1, setwidths1] = useState(true);
  const [heights1, setHeights1] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataımage, setDataImage] = useState('');
  const [editItem, seteditItem] = useState();

  const [inputText, setinputText] = useState();

  const onPressItem = (item) => {
    setModalVisible(true);
    setinputText(item.DESCRIPTION);
    seteditItem(item.CODE)
  }

  const onPressSaveEdit = () => {
    seteditItem(editItem); //save input text to data
    setModalVisible(false); //close modal

  }




  ImageFunction = () => {
    setDataImage('GİZLİ')
  }

  flexDirectionFunction = () => {
    if (flexDirections === 'row') {

    }
  }

  ChangeGridValueFunction = () => {

    if (colum === false) {
      setColum(true)
    }
    setHeights(60)
    setHeights1(true)
    setwidths1(true)
    setflexDirections('row')
    setwidths(true)

  }
  ChangeGridValueFunction2 = () => {
    if (colum === true) {
      setColum(false)
      setHeights(140)
      setflexDirections('column')
      setwidths(false)
      setHeights1(true)
      setwidths1(true)
    }


  }
  Height = () => {
    if (colum === false) {
      setColum(true)
      setwidths(true)
      setHeights1(false)
      setwidths1(false)
    }
    setHeights(300)
    setflexDirections('column')
  }

  useEffect(() => {
    fetch('GİZLİ', {
      method: 'GİZLİ',
      headers: {
        'GİZLİ': 'GİZLİ',
        'GİZLİ': 'GİZLİ',
      },
      body: (JSON.stringify({
        "jsonFormat": 1,
        "querySqlText": "GİZLİ",
        "maxCount": -1
      }))
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson['rows']);
        setMasterDataSource(responseJson['rows']);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.DESCRIPTION
          ? item.DESCRIPTION.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.CODE}
        {'.'}
        {item.DESCRIPTION.toUpperCase()}
      </Text>
    );
  };




  getListViewItem = (item) => {
    Alert.alert(item.CODE);
  }
  emre = () => {
    Alert.alert('emre');
  }

  const sagButon = [
    {
      text: 'Düzenle',
      fontSize: 12,
      sensitivity: 10,
      fontWeight: "bold",
      color: 'black',
      backgroundColor: "yellow",
      onPress: emre
    }
  ]

  const solButon = [
    {
      text: 'Düzenle',
      fontSize: 12,
      sensitivity: 10,
      fontWeight: "bold",
      backgroundColor: "blue",
      onPress: emre
    }
  ]
  refreshData = () => {

    fetch('GİZLİ', {
      method: 'GİZLİ',
      headers: {
        'GİZLİ': 'GİZLİ',
        'GİZLİ': 'GİZLİ',
      },
      body: (JSON.stringify({
        "jsonFormat": 1,
        "querySqlText": "GİZLİ",
        "maxCount": -1
      }))
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson['rows']);
        setMasterDataSource(responseJson['rows']);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  update = () => {

    fetch('GİZLİ', {
      method: 'GİZLİ',
      headers: {
        'GİZLİ': 'GİZLİ',
        'GİZLİ': 'GİZLİ',
      },
      //tüm verileri çekecek adres verilmedi!!
      body: (JSON.stringify(
        {
          "meta": {
            "href": "GİZLİ"
          },
          "code": editItem,
          "name": inputText,
        }

      ))
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //setFilteredDataSource(responseJson['rows']);
        // setMasterDataSource(responseJson['rows']);
        refreshData();
        console.log('güncelleme tamamlandı');
        setModalVisible(false);
        toastWithDurationHandler();
      })
      .catch((error) => {
        console.error(error);
      });

  }
  const toastWithDurationHandler = () => {
    ToastAndroid.show('GÜNCELLEME TAMAMLANDI', ToastAndroid.SHORT);
  };
  return (
    <View>

      <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
        <Searchbar
          style={{ width: 230, height: 40 }}
          round
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <IconButton
          icon="format-list-bulleted"
          color={'#e51837'}
          size={25}
          onPress={ChangeGridValueFunction}
        />
        <IconButton
          icon="grid"
          color={'#e51837'}
          size={25}
          onPress={ChangeGridValueFunction2}
        />
        <IconButton
          icon="collage"
          color={'#e51837'}
          size={25}
          onPress={Height}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={styles.grindView}

          data={filteredDataSource}

          keyExtractor={(item, index) => index.toString()}

          renderItem={({ item }) => (
            <Swipeout autoClose
              right={sagButon}
              left={solButon}>
              <TouchableOpacity style={{
                flexDirection: flexDirections,
                width: widths ? '100%' : 120,
                margin: 2,
                borderRadius: 5,
                padding: 10,
                flex: 0.5,
                backgroundColor: '#e51837',
                alignItems: 'center',
                height: heights
              }}
                onPress={() => { onPressItem(item) }}>
                {ImageFunction()}
                <Image
                  style={{
                    width: widths1 ? 51 : 245,
                    height: heights1 ? 51 : 245,
                    resizeMode: 'contain'
                  }} source={{
                    uri:
                      'data:image/png;base64,' + dataımage
                  }}>


                </Image>
                <View style={{
                  flexDirection: 'column'
                }}>
                  <Text style={styles.itemName}
                  >{item.CODE}</Text>
                  <Text style={styles.itemName}
                  >{item.DESCRIPTION}</Text>
                </View>
              </TouchableOpacity></Swipeout>)}
          numColumns={colum ? 1 : 3}
          key={(colum) ? 'ONE COLUMN' : 'THREE COLUMN'}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <IconButton
                style={{
                  marginLeft: '95%'
                }}
                icon="close"
                color={'#e51837'}
                size={25}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <ScrollView>
                <Text style={styles.modalText}>GÜNCELLEME</Text>
                <Image
                  style={{
                    width: '100%',
                    height: 180,
                    alignItems: 'center',
                    marginTop: 15,

                  }}
                  source={{
                    uri:
                      'data:image/png;base64,' + dataımage
                  }}
                />
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => seteditItem(text)}
                  defaultValue={editItem}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                ></TextInput>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => setinputText(text)}
                  defaultValue={inputText}
                  editable={true}
                  multiline={false}
                  maxLength={200}
                ></TextInput>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => update()}
                >
                  <Text style={styles.textStyle}>Kaydet</Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',

  },
  itemName: {
    fontSize: 16,
    marginLeft: '5%',
    color: 'white',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    width: 350,
    height: 500,
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalView1: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    marginTop: 15
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {

    backgroundColor: "#e51837",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
  },
  textInput: {
    width: 250,
    fontWeight: 'bold',
    fontSize: 20
  }
});
export default Listpage;