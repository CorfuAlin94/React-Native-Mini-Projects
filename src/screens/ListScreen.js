import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";

function ListScreen(props) {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={(e) => {
          <Text>{e.name}</Text>;
        }}
      />
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

export default ListScreen;
