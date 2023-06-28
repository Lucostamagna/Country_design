import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CarouselScreen from "../Screen/CarouselScreen";


const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
      
    }}>
      <Stack.Screen name="Landing" component={CarouselScreen} />
    </Stack.Navigator>
  );
};
