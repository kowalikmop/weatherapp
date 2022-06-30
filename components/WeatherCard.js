import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React, { useState, useContext } from "react";
import { bluelights, bluemajor, red } from "../theme/colors";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AppState } from "./AppState";

const WeatherCard = () => {
  const { temp } = useContext(AppState);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {Math.floor(temp)}
        <MaterialCommunityIcons
          name="temperature-celsius"
          size={32}
          color="white"
        />
      </Text>
      <FontAwesome5 name="cloud-sun" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    //  backgroundColor: 'yellow',
  },
  text: {
    color: "white",
    fontSize: 70,
    paddingLeft: 40,
  },
  icon: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default WeatherCard;
