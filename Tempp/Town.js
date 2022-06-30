import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { bluelights, bluemajor, red } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { AppState } from './AppState';
import AppProvider from '../components/AppState';

const Town = () => {

  const { changeTown } = useContext(AppState);

    const [miasta, setMiasta] = useState(
        [
            {name: 'Poznań', id: '1'},
            {name: 'Warszawa', id: '2'},
            {name: 'Gdańsk', id: '3'},
            {name: 'Katowice', id: '4'},
            {name: 'Gdynia', id: '5'},
            {name: 'Wrocław', id: '6'},
            {name: 'Kraków', id: '7'},
        ]
    );

 
  return (

   <AppProvider>
    <View style={styles.view}>
        <ScrollView style={styles.scrollview}>
          {
              miasta.map((item) => {
                  return (
                    <Text key={item.id} style={styles.text} onPress={() => {changeTown(item.name)}}>{item.name}</Text>
                  )
              }

              )
          }
          </ScrollView>
    </View>
    </AppProvider>


  );
}

const styles = StyleSheet.create({
    view: {
      flex: 4,
        flexDirection: 'column',
        justifyContent: "flex-start",
  //      alignItems:  "left",
    //  backgroundColor: 'red',
  },
  scrollview: {
    marginTop: 30,
},
    text: {
        color: "white",
        fontSize: 20,
        width: 150,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 30,
        marginLeft: 10,
        backgroundColor: '#fcba03',
        borderRadius: 10,
  },


});

export default Town;
