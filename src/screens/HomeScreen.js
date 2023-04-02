import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        style={styles.text}
        title="Go to Components Screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to ImageScreen Screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to CounterScreen Screen"
        onPress={() => navigation.navigate("CounterScreen")}
      />
      <Button
        title="Go to ColorScreen Screen"
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button
        title="Go to SquareScreen Screen"
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
  },
});

export default HomeScreen;
