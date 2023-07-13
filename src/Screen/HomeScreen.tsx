import React, { useState, useContext, useCallback } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

import { useFonts } from "expo-font";
import DetailCountry from "../Components/DetailCountry";
import Animation from "../Components/Animation";
import { ThemeContext } from "../Context/ThemeContext";
import * as SplashScreen from 'expo-splash-screen';
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
SplashScreen.preventAutoHideAsync();

interface Slide {
  img: any;
  title: string;
  description: string;
  information: string;
}

const items: Slide[] = [
  {
    title: "BUENOS AIRES",
    img: require("../../assets/pic.jpg"),
    description: "CAPITAL DEL PAIS",
    information: "MÁS INFORMACIÓN",
  },
  {
    title: "BARILOCHE",
    img: require("../../assets/Bariloche.jpeg"),
    description: "REGIÓN PATAGÓNICA",
    information: "MÁS INFORMACIÓN",
  },
  {
    title: "USHUAIA",
    img: require("../../assets/Ushu.jpeg"),
    description: "FIN DEL MUNDO",
    information: "MÁS INFORMACIÓN",
  },
  {
    title: "SALTA",
    img: require("../../assets/Salta.jpeg"),
    description: "NORTE ARGENTINO",
    information: "MÁS INFORMACIÓN",
  },
  {
    title: "MENDOZA",
    img: require("../../assets/Mend.jpeg"),
    description: "REGIÓN VINICOLA",
    information: "MÁS INFORMACIÓN",
  },
];

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fontsLoaded]= useFonts({
  Regular:require("../../assets/fonts/Fasthand/Fasthand-Regular.ttf")
 })
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }


  const renderItem = (item: Slide, index: number) => {
    return (
      <View style={styles.view}>
        <Image style={styles.image} source={item.img} />
        <View style={styles.viewTitle}>
          <Text style={styles.title}> {item.title}</Text>
          <Text style={styles.description}> {item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    
    <View style={{ 
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      
      }}>
      <View style={{
         position: "relative",
         marginTop: "-4%",
         backgroundColor:colors.primary,
         width: "100%",
         height: "60%",
         marginBottom: "5%",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         borderBottomLeftRadius: 1000,
         borderBottomRightRadius: 1000,
      }}>
        <Carousel
          data={items}
          renderItem={({ item, index }: any) => renderItem(item, index)}
          sliderWidth={screenWidth}
          itemWidth={screenHeight}
          layout={"default"}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <View style={{ position: "absolute", top: 20, alignSelf: "center" }}>
          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeIndex}
            dotStyle={{
              width: 12,
              height: 12,
              borderRadius: 50,
              backgroundColor: "white",
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 1, width: "100%", marginLeft: 350 }}>
        <Animation />
      </View>
      <View>
        <Text style={{fontFamily:'Regular', fontSize:25, }}> TOP DE ACTIVIDADES </Text>
      </View>
      <View style={{ width: "100%", height: "30%" }}>
        <DetailCountry />
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: "relative",
    marginLeft: "4%",
    marginTop: "2%",
  },
  image: {
    width: "53%",
    height: "98%",
    marginLeft: "-3%",
    borderRadius: 90,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  viewText: {
    backgroundColor: 'yellow',
    marginTop: "10%",
    width: "98%",
    height: "10%",
    marginBottom: "6%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: 4,
  },
  viewTitle: {
    position: "absolute",
    top: 180,
    left: 0,
    right: 10,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
 

  textContainer: {
    position: "absolute",
    top: 99,
    width: "50%",
    left: -20,

    backgroundColor: "transparent",
    padding: 50,
    borderRadius: 10,
  },
  text: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  text1: {
    fontSize: 13,
    textAlign: "justify",
    color: "black",
  },
  viewPlace: {
    marginTop: "5%",
    marginLeft: "10%",
  },
  textPlace: {
    marginTop: "15%",
    marginBottom: "-25%",
    fontSize: 19,
    marginLeft: 10,
  },
  textPlaceTwo: {
    marginTop: "1%",
    marginBottom: "5%",
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: "-45%",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: "50%",
    width: "50%",
  },
  description: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: "50%",
    width: "50%",
  },
  viewPagination: {
    marginTop: "25%",
    marginBottom: "2%",
  },
});

export default HomeScreen;
