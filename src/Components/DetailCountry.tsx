import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
interface SlideProps {
  id: string;
  icono: string;
  information: string;
}
const SlideDate: SlideProps[] = [
  {
    id: "1",
    icono: "earth-outline",
    information: "PLACE",
  },
  {
    id: "2",
    icono: "fast-food-outline",
    information: "FOOD",
  },
  {
    id: "3",
    icono: "football-outline",
    information: "SPORT",
  },
  {
    id: "4",
    icono: "rainy-outline",
    information: "RAINY",
  },
  {
    id: "5",
    icono: "warning-outline",
    information: "PLACE",
  },
  {
    id: "6",
    icono: "image-outline",
    information: "PLACE",
  },
];

const Component: React.FC<SlideProps> = ({ icono, information }) => {
  const handlePress = () => {
    // Lógica para navegar a la pantalla de información
    // Puedes pasar información adicional utilizando navigation.navigate('Informacion', { datos })
  };
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <View style={styles.cardContainer}>
        <View
          style={{
            width: "100%",
            height: "95%",
            backgroundColor: colors.card,
            borderRadius: width * 0.03,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            flexDirection: "row",
            elevation: 4,
            padding: width * 0.03,
            marginBottom: 6,
            alignItems: "center",
          }}
        >
          <View style={styles.viewIcon}>
            <Ionicons
              // @ts-ignore
              name={icono}
              size={50}
              marginTop={4}
              color={colors.notification}
            />
          </View>

          <View style={styles.viewInformation}>
            <Text style={styles.textInformation}> {information}</Text>
            <Ionicons
              // @ts-ignore
              name="return-down-forward-outline"
              size={50}
              marginTop={4}
              color={colors.notification}
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
      data={SlideDate}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Component
          id={item.id}
          icono={item.icono}
          information={item.information}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
    marginHorizontal: 20,
    flexDirection: "row",
  },

  viewInformation: {
    marginHorizontal: 160,
    width: "100%",
    flexDirection: "row",
  },
  viewIcon: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  textInformation: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
  },
});

export default DetailCountry;
