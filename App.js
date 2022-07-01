import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppProvider from "./components/AppState";

import Tabs from "./components/Tabs";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </AppProvider>
  );
}
