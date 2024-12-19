import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";

import { globalColors } from "../theme/theme";
import { Text } from "react-native";
import { TopTabsNAvigator } from "./TopTabsNavigator";
import { StackNavigator } from "./StackNavigator";
import { IonIcon } from "../shared/IonIcon";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: "trasnsparent",
          borderColor: "transparent",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        // headerShown: false,
        tabBarBadgeStyle: {
          backgroundColor: globalColors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          tabBarActiveTintColor: globalColors.primary,
          title: "Home",

          tabBarIcon: ({ color }) => (
            <IonIcon
              name={"home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TopTaps"
        component={TopTabsNAvigator}
        options={{
          tabBarActiveTintColor: globalColors.primary,
          title: "Like",
          tabBarIcon: ({ color }) => (
            <IonIcon
              name={"heart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={StackNavigator}
        options={{
          tabBarActiveTintColor: globalColors.primary,
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <IonIcon
              name={"grid-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
