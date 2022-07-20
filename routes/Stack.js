import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import Town from "../components/Town";
import Tabs from "../components/Tabs";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Town: {
    screen: Town,
    navigationOptions: {
      title: "Wybierz miasto:",
    },
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
