import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppState = createContext();

const AppProvider = ({ children }) => {
  const apikey = "bfc3257422c89c6c9ce4529deabd779a";

  const [coords, setCoords] = useState({
    lon: 18.6464,
    lat: 54.3521,
  });
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [city, setCity] = useState("Warszawa");
  const [country, setCountry] = useState("");
  const [wind, setWind] = useState({});

  const startWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pl&units=metric`
      );
      setCoords(data.coord);
      setWeather(data.weather);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setCity(data.name);
      setCountry(data.sys.country);
      setWind(data.wind.speed);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  useEffect(() => {
    startWeather();
  }, []);

  const setTown = async (town) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apikey}&lang=pl&units=metric`
      );
      setCoords(data.coord);
      setWeather(data.weather);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setCity(data.name);
      setCountry(data.sys.country);
      setWind(data.wind.speed);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  const changeTown = (town) => {
    setTown(town);
  };

  return (
    <AppState.Provider
      value={{ changeTown, city, country, wind, humidity, temp, coords }}
    >
      {children}
    </AppState.Provider>
  );
};

export default AppProvider;
