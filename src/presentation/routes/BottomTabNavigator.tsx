import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { Tab2Screen } from "../screens/tabs/Tab2Screen";
import { Tab3Screen } from "../screens/tabs/Tab3Screen";
import { globalColors } from "../theme/theme";
import { Text } from "react-native";

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
          title: "Tab1",
          tabBarIcon: ({ color }) => <Text style={{ color }}> Tab1</Text>,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: "Tab2",
          tabBarIcon: ({ color }) => <Text style={{ color }}> Tab2</Text>,
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          title: "Tab3",
          tabBarIcon: ({ color }) => <Text style={{ color }}> Tab3</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
