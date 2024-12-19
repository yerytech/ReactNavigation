import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { IonIcon } from "./IonIcon";
import { globalColors } from "../theme/theme";

export const HamburgueMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <IonIcon
            name={"menu-outline"}
            color={globalColors.primary}
          />
        </Pressable>
      ),
    });
  }, []);
  return <></>;
};
