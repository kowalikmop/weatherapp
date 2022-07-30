import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { AppState } from "./AppState";

const Town = ({ navigation }) => {
  const { changeTown } = useContext(AppState);

  const [miasta, setMiasta] = useState([
    { name: "Poznań", id: "1" },
    { name: "Warszawa", id: "2" },
    { name: "Gdańsk", id: "3" },
    { name: "Katowice", id: "4" },
    { name: "Gdynia", id: "5" },
    { name: "Wrocław", id: "6" },
    { name: "Kraków", id: "7" },
  ]);

  const pressHandler = (item) => {
    changeTown(item.name);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.view}>
      <ScrollView style={styles.scrollview}>
        {miasta.map((item) => {
          return (
            <Text
              key={item.id}
              style={styles.text}
              onPress={() => {
                pressHandler(item);
              }}
            >
              {item.name}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    //      alignItems:  "left",
    //  backgroundColor: 'red',
    marginTop: 80,
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
    backgroundColor: "#fcba03",
    borderRadius: 10,
  },
});

export default Town;
