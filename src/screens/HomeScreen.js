import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Button } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation.navigate);
  const friends = [
    { name: "Puss #1 😘", age: 2 },
    { name: "Puss #2 😘", age: 12 },
    { name: "Puss #3 😘", age: 22 },
    { name: "Puss #4 😘", age: 2 },
    { name: "Puss #5 😘", age: 32 },
    { name: "Puss #6 😘", age: 42 },
    { name: "Puss #7 😘", age: 11 },
    { name: "Puss #8 😘", age: 13 },
  ];

  return (
    <View>
      <Text style={styles.text}>Hey Pusss! 😍🥰🥰😘😘😍</Text>
      <Text style={styles.another}>I lo ve you!! 😍🥰🥰😘😘😍</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.anotherText}>{item.name}</Text>
              <Text style={styles.anotherText}>{item.age}</Text>
              <Button
                title="GO TO BUTTONS"
                onPress={() => props.navigation.navigate("List")}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 38,
    color: "green",
  },
  another: {
    fontSize: 30,
    color: "red",
  },
  anotherText: {
    marginVertical: 50,
  },
});

export default HomeScreen;
