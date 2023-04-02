import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { set } from "react-native-reanimated";

const TextScreen = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  console.log(text);
  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => setText(newValue)}
      />
      <Text>My name is: {text}</Text>
      <Text>Enter password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {password.length < 4 ? (
        <Text>Password must be at least 5 char. </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default TextScreen;
