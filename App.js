import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Components from "./src/screens/Components";
import List from "./src/screens/List";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: List,
    Components: Components,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
  },
  {
    initialRouteName: "SquareScreen",
    defaultNavigationOptions: {
      title: "Cats 4 Life",
    },
  }
);

export default createAppContainer(navigator);
