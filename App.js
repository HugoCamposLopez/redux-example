import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/hubs/Navigation";
import * as Linking from "expo-linking";
import { Text } from "react-native";
import { store } from "./src/store/store";
import {Provider} from 'react-redux'
export default function App() {
  /**
   * To allow deep links
   */
  const prefix = Linking.createURL("/");
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: {
          path: "Home",
        },
        Profile: {
          path: "Profile",
          parse: {
            id: (id) => {
              return id;
            },
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
