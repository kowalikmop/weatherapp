import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";

import { useContext } from "react";
import { AppState } from "./AppState";

const Maps = () => {
  const { coords, city, temp } = useContext(AppState);
  const tempp = `Temperatura: ${Math.floor(temp.toString())} c`;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30,
          longitude: 30,
          latitudeDelta: 1.2525,
          longitudeDelta: 1.2525,
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
    marginTop: 90,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Maps;
