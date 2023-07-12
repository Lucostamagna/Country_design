import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator/Navigator';
import { ThemeProvider } from './src/Context/ThemeContext';
import Maps from './src/Screen/Maps';



export default function App() {
  return (
   <AppState>
    <Maps/>
    </AppState>
  );
}


const AppState=({children}:any)=>{
  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}