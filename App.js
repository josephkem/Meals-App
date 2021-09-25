import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
