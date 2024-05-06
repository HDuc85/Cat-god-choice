import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { TouchableOpacity, Image, Text, View, Animated } from "react-native";

const SpinImage = (props, ref) => {
  const [stopped, setStopped] = useState(false);
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const image = require("../assets/Magic_Circle.png");

  useImperativeHandle(ref, () => ({
    spin: () => {
      handleAnimation();
    },
  }));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1080deg"],
  });

  const animatedStyle = {
    width: 350,
    height: 350,
    top: 230,
    left: "center",
    position: "absolute",
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return <Animated.Image style={animatedStyle} source={image} />;
};

export default forwardRef(SpinImage);
