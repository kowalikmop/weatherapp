import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import City from "./City";
import WeatherCard from "./WeatherCard";
import WeatherDetails from "./WeatherDetails";
import Imagee from "../assets/WeatherBackground.png";

const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Town");
  };

  return (
    <>
      <SafeAreaView style={styles.conteiner}>
        <ImageBackground
          source={Imagee}
          resizeMode="cover"
          style={styles.image}
        >
          <TouchableOpacity onPress={pressHandler} style={styles.citys}>
            <City></City>
          </TouchableOpacity>
          <WeatherCard></WeatherCard>
          <WeatherDetails></WeatherDetails>
        </ImageBackground>
      </SafeAreaView>
    </>
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
