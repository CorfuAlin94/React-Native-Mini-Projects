import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetails";

function ImageScreen() {
  return (
    <View>
      <ImageDetail
        title={"Garfield"}
        imageSource={require("../../assets/beach.jpg")}
        imageScore={"Image score - 9"}
      />
      <ImageDetail
        title={"Snow"}
        imageSource={require("../../assets/forest.jpg")}
        imageScore={"Image score - 7"}
      />
      <ImageDetail
        title={"Cat San"}
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={"Image score - 4"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageScreen;
