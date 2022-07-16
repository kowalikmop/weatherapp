import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.view}>
      <ScrollView>
        <FontAwesome name="user-secret" size={180} color="black" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: "center",
    marginTop: 120,
    //   backgroundColor: 'blue',
  },
});

export default Profile;
