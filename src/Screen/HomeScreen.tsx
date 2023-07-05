import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { ImageURISource } from "react-native";
import { useFonts } from "expo-font";
import DetailCountry from "../Components/DetailCountry";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

interface Slide {
  img: ImageURISource;
  title: string;
  description: string;
}

const items: Slide[] = [
  {
    title: "BUENOS AIRES",
    img: require("../../assets/pic.jpg"),
    description: "CAPITAL DEL PAIS",
  },
  {
    title: "BARILOCHE",
    img: require("../../assets/Bariloche.jpeg"),
    description: "REGIÓN PATAGÓNICA",
  },
  {
    title: "USHUAIA",
    img: require("../../assets/Ushu.jpeg"),
    description: "FIN DEL MUNDO",
  },
  {
    title: "SALTA",
    img: require("../../assets/Salta.jpeg"),
    description: "NORTE ARGENTINO",
  },
  {
    title: "MENDOZA",
    img: require("../../assets/Mend.jpeg"),
    description: "REGIÓN VINICOLA",
  },
];

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
// const [fontsLoaded]= useFonts({
// Regular:require("../../assets/fonts/Regular.ttf")
// })


  const renderItem = (item: Slide, index: number) => {
    return (
      <View style={styles.view}>
        <Image style={styles.image} source={item.img}  />
        <View style={styles.viewTitle}>
          <Text style={styles.title}> {item.title}</Text>
          <Text style={styles.description}> {item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.viewCarousel}>
      <View style={styles.viewPlace}>
        <Text style={styles.textPlace}> TOP DE LUGARES EN ARGENTINA</Text>
      </View>
      <View style={styles.viewPagination}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 8,
            height: 8,
            backgroundColor: "black",
          }}
        />
      </View>
<View style={styles.viewCard}>
      <Carousel
        data={items}
        renderItem={({ item, index }: any) => renderItem(item, index)}
        sliderWidth={screenWidth}
        itemWidth={screenHeight}
        layout={"default"}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
</View>
<View >

        <Text style={styles.textPlaceTwo}> ACTIVIDADES E INFORMACIÓN</Text>
      
  <DetailCountry/>
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
    width: "47%",
    height: "63%",
    borderRadius: 20,
  },
  viewTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 10,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  viewCarousel: {
    flex: 1,
    backgroundColor: "pink",
    
  },
  viewCard:{
    marginTop:'-6%',
   
    width:'100%', 
    height:'75%',
     marginBottom:'-49%'
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
    marginBottom:'-25%',
    fontSize: 19,
    marginLeft:10
  },
  textPlaceTwo:{
    marginTop: "1%",
    marginBottom:'5%',
    fontSize: 19,
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginRight: "80%",
    
  },
  description: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    marginRight: "80%",
  
  },
  viewPagination: {
    marginTop: "25%",
    marginBottom: "2%",
  },
});

export default HomeScreen;
