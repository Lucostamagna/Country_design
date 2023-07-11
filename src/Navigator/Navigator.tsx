import React, {useContext} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "../Context/ThemeContext";
import DashboardScreen from "../Screen/DashboardScreen";

import HomeScreen from "../Screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();
export const Navigator = () => {

const {theme}= useContext(ThemeContext)


  return (
    <NavigationContainer
    theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//carousel con paginacion,
//theme
