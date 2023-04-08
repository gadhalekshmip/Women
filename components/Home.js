import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Background from "./Background";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";

export default function Home() {
  const navigation = useNavigation();

  const handleTap = () => {
    navigation.navigate("Login"); // Navigate to Login screen when background is tapped
  };
  return (
    <Background>
      <TouchableWithoutFeedback onPress={handleTap}>
        <View style={styles.overlayContainer} />
      </TouchableWithoutFeedback>
    </Background>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
