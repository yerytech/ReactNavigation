import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryBtn } from "../../shared/PrimaryBtn";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  console.log(top);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 20,
      }}
    >
      <Text> ProfileScreen</Text>
      <PrimaryBtn
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        label="Back to menu"
      />
    </View>
  );
};
