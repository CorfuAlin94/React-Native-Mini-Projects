import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import SquareScreenTwo from "./src/screens/SquareScreen2";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    ListScreen: ListScreen,
    Components: ComponentsScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen,
    SquareScreenTwo: SquareScreenTwo,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "React Native Mini Prj",
    },
  }
);

export default createAppContainer(navigator);
