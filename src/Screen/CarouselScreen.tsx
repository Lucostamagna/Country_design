import React, {useState} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text
} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {ImageSourcePropType} from 'deprecated-react-native-prop-types';


const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

interface Slide {
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {img: require("../../assets/pic.jpg"), },
  {img: require("../../assets/Patagonia.jpeg"),},
  {img: require("../../assets/Sur.jpeg"),},
];

const CarouselScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
             resizeMode: 'cover',
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
    
      <Carousel
        data={items}
        renderItem={({ item }: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenHeight}
        layout={'default'}
        onSnapToItem={(index)=> setActiveIndex(index)}
        

      />
      <Pagination
      dotsLength={items.length}
      activeDotIndex={activeIndex}
      dotStyle={{
        width:30,
        height:2,
        backgroundColor:'red'
      }}

      
      />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  textOverlay: {
   
   
    alignItems: 'center',
    backgroundColor: 'red', // Color y opacidad del fondo del texto
  },
  text: {
    color: '#fff', // Color del texto
    fontSize: 16,
    fontWeight: 'bold',
}})


export default CarouselScreen;
