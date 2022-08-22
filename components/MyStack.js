import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Town from "./Town";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Town"
        component={Town}
        options={{ headerShown: true, title: false }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
