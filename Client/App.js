// Imports React Native
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';

// Imports Redux
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";

import Appnavigationlog from "./src/Navigation/AppNavigationlog/AppNavigationlog";

const store = configureStore();

export default function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <NavigationContainer>
        <Appnavigationlog />
      </NavigationContainer>
    </Provider>
    </React.StrictMode>
  );
}
