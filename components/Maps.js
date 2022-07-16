import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { useContext } from "react";
import { AppState } from "./AppState";

const Maps = () => {
  const { coords } = useContext(AppState);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coords.lat,
          longitude: coords.lon,
          //  latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: coords.lat, longitude: coords.lon }}
          pinColor="red"
          title="HEj"
          description="Siema"
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
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Maps;
