import * as React from "react";
import { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";

import { useContext, useRef } from "react";
import { AppState } from "./AppState";

const Maps = () => {
  const { coords, city, temp } = useContext(AppState);
  const tempp = `Temperatura: ${Math.floor(temp.toString())} c`;

  const mapViewRef = useRef(null);

  useEffect(() => {
    goToRegion();
  }, [city]);

  const animateRegion = {
    latitude: coords.lat,
    longitude: coords.lon,
    latitudeDelta: 4.9525,
    longitudeDelta: 4.9525,
  };

  const goToRegion = () => {
    //complete this animation in 3 seconds
    mapViewRef.current.animateToRegion(animateRegion, 2000);
    console.log(city);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: coords.lat,
          longitude: coords.lon,
          latitudeDelta: 0.7525,
          longitudeDelta: 0.7525,
        }}
      >
        <Marker
          coordinate={{ latitude: coords.lat, longitude: coords.lon }}
          pinColor="blue"
          title={city}
          description={tempp}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Maps;
