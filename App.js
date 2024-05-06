import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
// import Spin from "./components/Spin"
import SpinImage from "./components/SpinImage";
export default function App() {
  const [frame, setFrame] = useState(true);
  const image1 = require("./assets/1.png");
  const image2 = require("./assets/2.png");
  const childRef = useRef();
  useEffect(() => {
    setTimeout(function () {
      frame ? setFrame(false) : setFrame(true);
    }, 300);
  }, [frame]);

  return (
    <View style={styles.container}>
      <SpinImage ref={childRef} />
      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={async () => childRef.current.spin()}
      >
        <Image
          source={frame ? image1 : image2}
          style={{ width: 350, height: 350, left: 30, top: -10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#E0FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {},
});
