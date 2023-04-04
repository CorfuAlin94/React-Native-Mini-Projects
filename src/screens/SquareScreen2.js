import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      state;
  }
};
const SquareScreenTwo = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state);

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
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
export default SquareScreenTwo;
