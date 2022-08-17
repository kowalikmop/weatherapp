import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Icon,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
// import { auth } from '../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  } */

  return (
    <View style={styles.view}>
      <Feather name="user" size={70} color="black" />
      <Text style={styles.text}>Logowanie</Text>
      <View style={styles.inputs}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="email"
          autoFocus
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="hasło"
          secureTextEntry
        />
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.primary_btn} /*onPress={handleSignUp} */>
          <Text style={styles.text_primary_btn}>Zaloguj</Text>
        </Pressable>
        <Pressable style={styles.secondary_btn} /* onPress={handleSignUp} */>
          <Text style={styles.text_secondary_btn}>Zarejestruj</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 120,
    alignItems: "center",
    //   backgroundColor: 'blue',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  inputs: { marginTop: 30 },
  input: {
    marginTop: 20,
    fontSize: 14,
    width: 200,
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    // borderBottomColor: 'red',
  },
  buttons: { marginTop: 30 },
  primary_btn: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#fcba03",
    marginTop: 20,
    width: 200,
    alignItems: "center",
  },
  secondary_btn: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "transparent",
    marginTop: 20,
    width: 200,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fcba03",
  },
  text_primary_btn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.55,
    color: "white",
  },
  text_secondary_btn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.55,
    color: "#fcba03",
  },
});

export default Login;
