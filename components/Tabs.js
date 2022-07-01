import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  tabBarIconColor,
  tabBarIconHeight,
  tabBarBadgeBackgroundColor,
} from "../theme/bottom-tabs";
import React, { useState, useContext } from "react";

import { AppState } from "./AppState";

import City from "./City";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { city, country, temp } = useContext(AppState);

  const temmpp = String(Math.floor(temp));

  console.log(typeof(temmpp));

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60, paddingBottom: 6 },
      }}
    >
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarBadge: temmpp,
          tabBarBadgeStyle: { backgroundColor: tabBarBadgeBackgroundColor },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="locate-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pogoda"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="sun" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
