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
    { name: "Białystok", id: "1" },
    { name: "Bydgoszcz", id: "2" },
    { name: "Gdańsk", id: "3" },
    { name: "Katowice", id: "4" },
    { name: "Kielce", id: "5" },
    { name: "Kraków", id: "6" },
    { name: "Lublin", id: "7" },
    { name: "Łódź", id: "8" },
    { name: "Olsztyn", id: "9" },
    { name: "Opole", id: "10" },
    { name: "Poznań", id: "11" },
    { name: "Rzeszów", id: "12" },
    { name: "Szczecin", id: "13" },
    { name: "Toruń", id: "14" },
    { name: "Warszawa", id: "15" },
    { name: "Wrocław", id: "16" },
    { name: "Zielona Góra", id: "17" },
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
    marginTop: 60,
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
