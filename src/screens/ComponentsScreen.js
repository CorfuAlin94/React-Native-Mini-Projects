import React from "react";
import { Text, StyleSheet } from "react-native";

function ComponentsScreen() {
  var name = "Alin";
  return <Text style={styles}>My name is {name}</Text>;
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
