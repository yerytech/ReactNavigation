import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SettingScreen } from "../screens/settings/SettingScreen";
import { StackNavigator } from "./StackNavigator";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
import { globalColors } from "../theme/theme";
import { useWindowDimensions, View } from "react-native";

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? "permanent" : "slide",
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.secondary,
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 25,
          padding: 5,
          marginBottom: 10,
        },
      }}
    >
      <Drawer.Screen
        name="StackNavgation"
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 20,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
