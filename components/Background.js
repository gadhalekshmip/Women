import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/back.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlayContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.overlayImage}
          />
          <Text style={styles.text}>W safe</Text>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayImage: {
    //resizeMode: 'contain',
    //width: '25%',
    //height: '25%',
    //marginTop: -200
    resizeMode: "contain",
    width: 86,
    height: 78,
    left: 160,
    top: 306,
    position: "absolute",
  },
  text: {
    // Added styles for the text component
    position: "absolute",
    width: 207,
    height: 52,
    left: 143,
    top: 384,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "400",
    fontSize: 40,
    lineHeight: 49,
    color: "#FFFFFF",
  },
});
