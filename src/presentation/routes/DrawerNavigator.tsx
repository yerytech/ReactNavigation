import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingScreen } from "../screens/settings/SettingScreen";
import { StackNavigator } from "./StackNavigator";
import { ProfileScreen } from "../screens/profile/ProfileScreen";

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
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
