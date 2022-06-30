import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React, { useState, useContext } from "react";
import { bluelights, bluemajor, red } from "../theme/colors";
import { MaterialCommunityIcons, Feather, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AppState } from "./AppState";

const WeatherDetails = () => {
  const { wind, humidity } = useContext(AppState);

  const Wind = () => {
    return wind ? (
      <View style={styles.vbox}>
        <Text style={styles.text}>
          <Feather name="wind" size={20} color="white" />
        </Text>
        <Text style={styles.text}>{Math.floor(wind)}m/s</Text>
      </View>
    ) : (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="white"
      />
    );
  };

  const Humidity = () => {
    return wind ? (
      <View style={styles.vbox}>
        <Text style={styles.text}>
          <Entypo name="drop" size={20} color="white" />
        </Text>
        <Text style={styles.text}>{Math.floor(humidity)}%</Text>
      </View>
    ) : (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="white"
      />
    );
  };

  return (
    <View style={styles.view}>
      <Wind />

      <View style={styles.vbox}>
        <Text style={styles.textsep}>&nbsp;</Text>
      </View>

      <Humidity />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: 'green',
  },
  vbox: {
    // flex:2,
    // flexDirection: "column",
    justifyContent: "center",
    // alignItems: "flex-start",
    // backgroundColor: 'green',
    height: 50,
  },
  activityIndicator: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingLeft: 30,
    paddingRight: 30,
    //alignItems: "center",
    alignSelf: "center",
  },
  textsep: {
    color: "white",
    fontSize: 40,
    width: 1,
    backgroundColor: "white",
  },
});

export default WeatherDetails;
