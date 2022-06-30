import { SafeAreaView, StyleSheet, ImageBackground, Text, View, Alert, Image, Button, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './Header';
import City from './City';
import Town from './Town';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';
import Imagee from '../assets/WeatherBackground.png';

const Home = ({ navigation })=> {

const apikey = '56887c204ae420096c17aa1f9bfc0343';

const [coords, setCoords] = useState({});
const [weather, setWeather] = useState([]);
const [main, setMain] = useState([]);
const [city, setCity] = useState('Warszawa');
const [sys, setSys] = useState({});
const [wind, setWind] = useState({});

  const startWeather = async () => {
    try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pl&units=metric`);
    setCoords(data.coord);
    setWeather(data.weather);
    setMain(data.main);
    setCity(data.name);
    setSys(data.sys);
    setWind(data.wind.speed);
    }
    catch (err) {
      console.log(err);
      Alert("Problem z API")
    }
   }

   useEffect(() => {
    startWeather();
    }, []);

  
    const setTown = async (town) => {
      try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apikey}&lang=pl&units=metric`);
      setCoords(data.coord);
      setWeather(data.weather);
      setMain(data.main);
      setCity(data.name);
      setSys(data.sys);
      setWind(data.wind.speed);
      }
      catch (err) {
        console.log(err);
        Alert("Problem z API")
      }
     }


    const changeTown = (town) => {
      setTown(town);
      };


      const pressHandler = () => {

        navigation.navigate('Town');
      };
  


  return (

        <SafeAreaView style={styles.conteiner}>
        <ImageBackground source={Imagee} resizeMode="cover" style={styles.image}>
        <Header/>
        <TouchableOpacity onPress={pressHandler} style={styles.citys}>
        <City city={city} country={sys.country}></City>
        </TouchableOpacity>
        <WeatherCard temp={Math.floor(main.temp)}></WeatherCard>
        <WeatherDetails wind={Math.floor(wind)} humidity={Math.floor(main.humidity)}></WeatherDetails>
        <Town changeTown={changeTown}/>
        </ImageBackground>
        </SafeAreaView>

 )
}

const styles = StyleSheet.create({

  conteiner: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: 'white',
    fontSize: 22,
},
citys: {
  flex: 1,
}

});

export default Home;
