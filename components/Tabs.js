import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  tabBarIconColor,
  tabBarIconHeight,
  tabBarBadgeBackgroundColor,
} from "../theme/bottom-tabs";
import React, { useState, useContext } from "react";

import { AppState } from "./AppState";

import MyStack from "./MyStack";
import Profile from "./Profile";
import Maps from "./Maps";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { city, temp } = useContext(AppState);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60, paddingBottom: 6 },
      }}
    >
      <Tab.Screen
        name={city}
        component={MyStack}
        options={{
          tabBarBadge: Math.floor(temp),
          tabBarIcon: ({ color, size }) => (
            <Feather name="sun" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Maps}
        options={{
          tabBarBadgeStyle: { backgroundColor: tabBarBadgeBackgroundColor },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="locate-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          //  tabBarBadge: temmpp,
          tabBarBadgeStyle: { backgroundColor: tabBarBadgeBackgroundColor },
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
