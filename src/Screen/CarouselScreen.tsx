import React from "react";
import {
  SafeAreaView,
  View,
  
  Dimensions,
  Image,
  Text
} from "react-native";
import Carousel from "react-native-snap-carousel";
import {ImageSourcePropType} from 'deprecated-react-native-prop-types';


const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

interface Slide {
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    img: require("../../assets/pic.jpg"),
  },

  {
    img: require("../../assets/Patagonia.jpeg"),
  },

  {
    img: require("../../assets/Sur.jpeg"),
  },
];

const CarouselScreen = () => {
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,

          justifyContent: "center",
        }}
      >
        <Image
          source={item.img}
          style={{
            width: screenWidth,
            height: screenHeight,
            borderRadius: 20,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text> Descubre Argentina</Text>
      </View>
      <Carousel
        data={items}
        renderItem={({ item }: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenHeight}
      />
    </SafeAreaView>
  );
};

export default CarouselScreen;
