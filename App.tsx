import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StackNavigator } from "./src/presentation/routes/StackNavigator";
import { DrawerNavigator } from "./src/presentation/routes/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
