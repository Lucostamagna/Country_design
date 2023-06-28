import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../Screen/LandingScreen";

const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} />
     
    </Stack.Navigator>
  );
};
