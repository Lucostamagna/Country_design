import React from "react";

import {
  View,
  StyleSheet,

  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";


const DashboardScreen = () => {
  const navigation= useNavigation()

  function goToApp(){
     // @ts-ignore
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Arg.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.ViewIcon}>
          <Ionicons name="location-outline" size={45} color="black" />
        </View>
        <Text style={styles.text}>ARGENTINA</Text>
        <View style={{ width: "70%", marginRight: "20%" }}>
          <Text style={styles.text1}>
            {" "}
            Desde la vibrante vida urbana hasta la serenidad de sus paisajes
            naturales, te espera un viaje inolvidable.
          </Text>
        </View>

        <View style={styles.ViewBotton}>
          <Text style={styles.text2}> COMENZAR</Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={goToApp}>
            <Ionicons
              name={"chevron-forward-outline"}
              size={35}
              color="black"
              marginLeft={25}
              marginTop={7}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 38,
    fontWeight: "bold",
    color: "black",
    marginTop: "2%",
    marginRight: "25%",
  },
  text1: {
    fontSize: 13,
    textAlign: "justify",
    color: "black",
  },
  ViewIcon: {
    marginTop: "3%",
    marginRight: "65%",
  },
  ViewBotton: {
    width: "80%",
    height: "8%",
    borderRadius: 30,
    backgroundColor: '#F9E79F',
    marginTop: "100%",
  },
  button: {
    width: "23%",
    height: "80%",
    borderRadius: 30,
    backgroundColor: '#95A5A6',
    marginLeft: "75%",
    marginTop: "-9%",
  },
  text2: {
    color: "black",
    marginLeft: "30%",
    marginTop: "5%",
    fontSize: 15,
  },
});

export default DashboardScreen;
