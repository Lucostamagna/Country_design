import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface SlideProps {
  id: string;
  icono: string;
}
const SlideDate: SlideProps[] = [
  {
    id: "1",
    icono: "book",
  },
  {
    id: "3",
    icono: "pencil",
  },



];

const Component: React.FC<SlideProps> = ({ icono }) => {
  const handlePress = () => {
    // Lógica para navegar a la pantalla de información
    // Puedes pasar información adicional utilizando navigation.navigate('Informacion', { datos })
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 100 }}
      >
        <Icon name={icono} size={60} />
      </View>
    </TouchableOpacity>
  );
};

const DetailCountry: React.FC = () => {
  return (
    <FlatList
      horizontal
      data={SlideDate}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Component id={item.id} icono={item.icono} />
      )}
    />
  );
};
export default DetailCountry;
