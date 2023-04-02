import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

function List(props) {
  return (
    <View>
      <Text>Hello!</Text>
      <Button
        title="GO to Kitty"
        onPress={() => props.navigation.navigate("Home")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default List;
