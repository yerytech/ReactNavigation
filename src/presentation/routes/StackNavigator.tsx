import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { ProductsScreen } from "../screens/products/ProductsScreen";
import { AboutScreen } from "../screens/abouts/AboutScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { SettingScreen } from "../screens/settings/SettingScreen";
import { ProductScreen } from "../screens/products/ProductScreen";

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: { id: number; name: string };
  Setting: undefined;
  Profile: undefined;
  About: undefined;
};
const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        options={{
          animation: "fade",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          animation: "fade",
        }}
        name="Product"
        component={ProductScreen}
      />
      <Stack.Screen
        options={{
          animation: "none",
        }}
        name="Products"
        component={ProductsScreen}
      />
      <Stack.Screen
        options={{
          animation: "fade_from_bottom",
        }}
        name="About"
        component={AboutScreen}
      />
      <Stack.Screen
        options={{
          animation: "slide_from_bottom",
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          animation: "fade",
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};
