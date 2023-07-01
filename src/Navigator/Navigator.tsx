import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../Screen/DashboardScreen";


const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
      
      
    }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
  
    </Stack.Navigator>
  );
};



//carousel con paginacion, 
//theme