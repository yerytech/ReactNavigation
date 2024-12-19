import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen } from "../screens/home/HomeScreen";
import { AboutScreen } from "../screens/abouts/AboutScreen";
import React from "react";
import { HamburgueMenu } from "../shared/HamburgueMenu";

const Tab = createMaterialTopTabNavigator();

export const TopTabsNAvigator = () => {
  return (
    <>
      <HamburgueMenu />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
        />
      </Tab.Navigator>
    </>
  );
};
