import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Animated, Easing } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Spin = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startRotate = () => {
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,

      useNativeDriver: false,
    }).start(() => rotateValueHolder.setValue(0));
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  useEffect(() => {
    startRotate();
  }, []);

  const animatedStyle = {
    color: "#000000",
    size: 40,
    transform: [
      {
        rotate: rotateData,
      },
    ],
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Animated.AntDesign style={animatedStyle} name={"loading1"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Spin;
