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
import { Feather } from "@expo/vector-icons";

const Login = () => {
  return (
    <View style={styles.view}>
      <Feather name="user" size={70} color="black" />
      <Text style={styles.text}>Logowanie</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          autoComplete="email"
          placeholder="email"
          autoFocus
        />
        <TextInput
          style={styles.input}
          autoComplete="password"
          placeholder="hasło"
        />
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.primary_btn}>
          <Text style={styles.text_primary_btn}>Zaloguj</Text>
        </Pressable>
        <Pressable style={styles.secondary_btn}>
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
    height: 50,
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
