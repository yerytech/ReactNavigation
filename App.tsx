import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StackNavigator } from "./src/presentation/routes/StackNavigator";
import { DrawerNavigator } from "./src/presentation/routes/DrawerNavigator";
import { BottomTabNavigator } from "./src/presentation/routes/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}
