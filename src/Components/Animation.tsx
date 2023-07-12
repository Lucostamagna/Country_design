import React, { useContext } from "react";

import { View,Text } from "react-native";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../Context/ThemeContext";

const Animation = () => {
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <View>
      <TouchableOpacity onPress={setDarkTheme}>
       <Text> DARK</Text>
      </TouchableOpacity>
      <LottieView
          autoPlay={true}
          style={{
            width: "10%",
            backgroundColor: "transparent",
            alignSelf: "center",
          }}
          source={require("../../assets/Animation/148518-dark-to-light-mode-switch-button.json")}
        />
        <TouchableOpacity onPress={setLightTheme }>
       <Text>LIGHT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animation;
