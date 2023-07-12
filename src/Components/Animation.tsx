import React, { useContext } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../Context/ThemeContext";

const Animation = () => {
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        width: "70%",
        marginLeft: 40,
        marginTop: -35,
      }}
    >
      <View
        style={{
          width: "40%",
          marginLeft: 130,
        }}
      >
        <TouchableOpacity onPress={setDarkTheme} activeOpacity={0.8}>
          <LottieView
            autoPlay={true}
            style={{
              width: "30%",
              backgroundColor: "transparent",
            }}
            source={require("../../assets/Animation/animation_ljz3ky5t.json")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "40%",
          marginLeft: 130,
        }}
      >
        <TouchableOpacity onPress={setLightTheme} activeOpacity={0.8}>
          <LottieView
            autoPlay={true}
            style={{
              width: "30%",
              backgroundColor: "transparent",
              marginBottom: 4,
            }}
            source={require("../../assets/Animation/animation_ljz3lrvf.json")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Animation;
