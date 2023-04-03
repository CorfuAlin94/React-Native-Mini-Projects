import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function ListScreen(props) {
  const friends = [
    { name: "Friend #1", id: 1, age: 10 },
    { name: "Friend #2", id: 2, age: 12 },
    { name: "Friend #3", id: 3, age: 31 },
    { name: "Friend #4", id: 4, age: 11 },
    { name: "Friend #5", id: 5, age: 30 },
    { name: "Friend #6", id: 6, age: 21 },
    { name: "Friend #7", id: 7, age: 41 },
    { name: "Friend #8", id: 8, age: 21 },
    { name: "Friend #9", id: 9, age: 42 },
    { name: "Friend #10", id: 10, age: 100 },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.textStyle}
        data={friends}
        keyExtractor={(friend) => friend.id}
        renderItem={({ item }) => {
          return (
            <Text style={styles.itemStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
      <Button
        title="Go Home"
        onPress={() => props.navigation.navigate("HomeScreen")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    margin: 10,
  },
  itemStyle: {
    marginLeft: 10,
  },
});

export default ListScreen;
