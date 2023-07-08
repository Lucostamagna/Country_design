import React from "react";

import {View} from "react-native";
import LottieView from "lottie-react-native";
const Animation = () => {
  return (
    <View>
      <LottieView
        autoPlay={true}
        style={{
          width: "10%",
          backgroundColor: "transparent",
          alignSelf: "center",
        }}
        source={require("../../assets/Animation/148518-dark-to-light-mode-switch-button.json")}
      />
    </View>
  );
};

export default Animation;
