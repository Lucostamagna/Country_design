// import React, {useState} from "react";
// import {
//   SafeAreaView,
//   View,
//   StyleSheet,
//   Dimensions,
//   Image,
//   Text
// } from "react-native";
// import { colors } from "../Theme/Colors";
// import Carousel, {Pagination} from "react-native-snap-carousel";
// import {ImageSourcePropType} from 'deprecated-react-native-prop-types';


// const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// interface Slide {
//   img: img}

// const items: Slide[] = [
//   {img: require("../../assets/pic.jpg"), },
//   {img: require("../../assets/Patagonia.jpeg"),},
//   {img: require("../../assets/Sur.jpeg"),},
// ];

// const CarouselScreen = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const renderItem = (item: Slide, index: number) => {
//     return (
//       <View
//         style={{
//           flex: 1,

//           justifyContent: "center",
//         }}
//       >
//         <Image
//           source={item.img}
//           style={{
//             width: screenWidth,
//             height: screenHeight,
//             borderRadius: 20,
//             resizeMode: 'cover'
            
//           }}
        
//         />
//            {index === 0 && (
//         <View style={styles.textContainer}>
//           <Text style={styles.text}>Descubre Argentina</Text>
//           <Text style={styles.text1}> Desde la vibrante vida urbana hasta la serenidad de sus paisajes naturales, te espera un viaje inolvidable.</Text>
//         </View>
//       )}
          
      
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}
//     >
    
//       <Carousel
//         data={items}
//         renderItem={({ item, index }: any) => renderItem(item, index)}
//         sliderWidth={screenWidth}
//         itemWidth={screenHeight}
//         layout={'default'}
//         onSnapToItem={(index)=> setActiveIndex(index)}
        

//       />
//       <Pagination
//       dotsLength={items.length}
//       activeDotIndex={activeIndex}
//       dotStyle={{
//         width:30,
//         height:2,
//         backgroundColor:'black'
//       }}

      
//       />
//     </SafeAreaView>
//   );
// };




// const styles = StyleSheet.create({
//   textContainer: {
//     position: 'absolute',
//     top: 99,
//     width:'50%',
//     left:-30,
    
//     backgroundColor: 'transparent',
//     padding: 50,
//     borderRadius: 10,
//   },
//   text: {
//     color: 'black',
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
   
//   },
//   text1:{
//     fontSize: 13,
//     textAlign: 'justify',
//     color:'black'
//   }

// })


// export default CarouselScreen;
