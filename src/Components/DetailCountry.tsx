import React from "react";
import { View, Text, FlatList, TouchableOpacity,StyleSheet,Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../Theme/Colors";
const { width, height } = Dimensions.get("window");
interface SlideProps {
  id: string;
  icono: string;
  
}
const SlideDate: SlideProps[] = [
  {
    id: "1",
    icono: "earth-outline"
  },
  {
    id: "2",
    icono: "fast-food-outline"
  },
  {
    id: "3",
    icono: "football-outline"
  },
  {
    id: "4",
    icono: "rainy-outline"
  },
  {
    id: "5",
    icono: "warning-outline"
  },
  {
    id: "6",
    icono: "image-outline"
  },




];

const Component: React.FC<SlideProps> = ({ icono }) => {
  const handlePress = () => {
    // Lógica para navegar a la pantalla de información
    // Puedes pasar información adicional utilizando navigation.navigate('Informacion', { datos })
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <View style={styles.cardContainer}>
      <View style={styles.viewCard}>
      <View
        style={styles.card}
      >
       <Ionicons
        // @ts-ignore
              name={icono}
              size={43}
              marginTop={4}
              color='white'
            />
      </View>
      </View>
      </View>
    </TouchableOpacity>
  );
};

const DetailCountry: React.FC = () => {
  return (
    <FlatList
      horizontal
      data={SlideDate}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Component id={item.id} icono={item.icono} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 15, 
   
  },
  viewCard:{
    backgroundColor: colors.cardFlatlist,
    width:'110%',
    borderRadius: width * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: width * 0.03,
    marginBottom:4,
    alignItems:'center'
  },
  card:{
   
    
  }
})



export default DetailCountry;
