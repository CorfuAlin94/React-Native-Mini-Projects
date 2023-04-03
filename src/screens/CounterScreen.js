import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title="Increase"
      >
        {" "}
      </Button>
      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title="Decrease"
      >
        {" "}
      </Button>
      <Text style={styles}>Current Count: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
