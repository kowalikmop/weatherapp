import { StyleSheet, Text, View } from "react-native";
import { bluelights, bluemajor } from "../theme/colors";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const Header = () => {

  return (
    <View style={styles.view}>
      <SimpleLineIcons style={styles.icon} name="menu" size={32} />
      <Feather style={styles.icon} name="user" size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: 'green'
  },
  text: {},
  icon: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Header;
