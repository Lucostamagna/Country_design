import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../Screen/DashboardScreen";

import HomeScreen from "../Screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer>
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
