import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import { bluelights, bluemajor } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";

import { AppState } from "./AppState";

const City = () => {
  const { city, country } = useContext(AppState);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>
      <Ionicons name="locate-sharp" style={styles.icon} size={20} /> {city},{" "}
        {country}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //   backgroundColor: 'blue',
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingLeft: 20,
  },
  icon: {
    color: "white",
  },
});

export default City;
