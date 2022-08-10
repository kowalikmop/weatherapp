import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState, useContext, useLayoutEffect } from "react";
import City from "./City";
import WeatherCard from "./WeatherCard";
import WeatherDetails from "./WeatherDetails";
import Imagee from "../assets/WeatherBackground.png";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Town");
  };

  useLayoutEffect(() => {
    console.log("działa");
  }, [navigation]);

  return (
    <SafeAreaView style={styles.conteiner}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        // translucent={true}
      />
      <ImageBackground source={Imagee} resizeMode="cover" style={styles.image}>
        <TouchableOpacity onPress={pressHandler} style={styles.citys}>
          <City></City>
        </TouchableOpacity>
        <WeatherCard></WeatherCard>
        <WeatherDetails></WeatherDetails>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
  citys: {
    flex: 1,
  },
});

export default Home;
