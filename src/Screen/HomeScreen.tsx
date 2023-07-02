import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ImageURISource } from "react-native";

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

  const renderItem = (item: Slide, index: number) => {
    return (
      <View
        style={{
          flex: 1,
          position: "relative",
          marginLeft: "7%",
          marginTop: "2%",
        }}
      >
        <Image
          source={item.img}
          style={{
            width: "45%",
            height: "60%",
            borderRadius: 20,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 10,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}> {item.title}</Text>
          <Text style={styles.description}> {item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <View style={styles.viewPlace}>
        <Text style={styles.textPlace}> TOP DE LUGARES EN ARGENTINA</Text>
      </View>
      <View
        style={{
          marginTop: "25%",
          marginBottom: "-9%",
        }}
      >
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 30,
            height: 2,
            backgroundColor: "black",
          }}
        />
      </View>

      <Carousel
        data={items}
        renderItem={({ item, index }: any) => renderItem(item, index)}
        sliderWidth={screenWidth}
        itemWidth={screenHeight}
        layout={"default"}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    position: "absolute",
    top: 99,
    width: "50%",
    left: -30,

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
    marginTop: "10%",
    marginLeft: "10%",
  },
  textPlace: {
    fontSize: 19,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: "80%",
  },
  description: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    marginRight: "80%",
    backgroundColor: "black",
  },
});

export default HomeScreen;
