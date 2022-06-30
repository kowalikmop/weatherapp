import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Alert, Image,} from 'react-native';
import { useState, useEffect } from 'react';
import axios from "axios";
import Swiper from 'react-native-swiper';


const App = ()=> {


  const [usersquantity, setUsersquantity] = useState(10);
  const [users, setUsers] = useState([]);
  const [screen, setScreen] = useState('left');

  const fetchUsers = async () => {
    try {
    const { data } = await axios.get(`https://randomuser.me/api/?results=${usersquantity}`);
    setUsers(data.results);

    }
    catch (err) {
      console.log(err);
      Alert("Problem z API")
    }
  }
  
  useEffect(() => {
  fetchUsers();
    }, []);

 console.log("Wynik z API", users.length);


  return (

    <Swiper style={styles.wrapper} showsButtons={true}>
    {users.map((user) => (
        <View key={user.name.first} style={styles.slide}>
          <Text style={styles.text}>{user.name.first} {user.name.last}</Text>
          <Image source={{uri: user.picture.large}} style={styles.photo}></Image>
        </View>
         ))}
      </Swiper>


 )

}

const styles = StyleSheet.create({

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  photo: {
    width: "70%",
    height: "70%",
    borderRadius: 10,
  },
});

export default App;
