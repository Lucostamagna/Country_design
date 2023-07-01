import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ImageBackground 
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/Arg.jpeg")} style={styles.imageBackground}>
      
        <Text style={styles.text}>ARGENTINA</Text>
        <View style={{width:'70%', marginRight:'20%'}}>
        <Text style={styles.text1}> Desde la vibrante vida urbana hasta la serenidad de sus paisajes naturales, te espera un viaje inolvidable.</Text>
        </View>
        <View style={styles.ViewIcon}>
        <Ionicons name="location-outline" size={45} color="black" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
   marginTop:'-100%',
   marginRight:'25%'
  },
  text1:{
    fontSize: 13,
         textAlign: 'justify',
         color:'black'
  },
  ViewIcon:{
    marginTop:'-38%',
    marginRight:'65%'
  }
});

export default DashboardScreen;
