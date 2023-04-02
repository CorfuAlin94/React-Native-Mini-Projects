import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
import { Button } from "react-native-web";

const SquareScreen = () => {
  const [red, setRed] = useState(1);
  const [green, setGreen] = useState(1);
  const [blue, setBlue] = useState(1);

  console.log(red);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
        color="red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
        color="green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
        color="blue"
      />
      <Text
        style={{
          height: 100,
          width: 100,
          margin: 3,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></Text>
    </View>
  );
};

const style = StyleSheet.create({});

function randomColor() {
  setRed((red = Math.floor(Math.random() * 256)));
  setGreen((red = Math.floor(Math.random() * 256)));
  setBlue((red = Math.floor(Math.random() * 256)));

  return `rgb(${red}, ${green}, ${blue})`;
}
export default SquareScreen;
