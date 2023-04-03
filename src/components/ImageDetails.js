import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function ImageDetail({ title, imageSource, imageScore }) {
  return (
    <View style={styles.anotherText}>
      <Image style={styles.images} source={imageSource} />
      <Text style={styles}>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: 200,
    height: 200,
  },
});

export default ImageDetail;
