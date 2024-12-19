import { Pressable, Text, View } from "react-native";
import { globalStyle } from "../../theme/theme";
import { PrimaryBtn } from "../../shared/PrimaryBtn";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyle.constainer}>
      <PrimaryBtn
        onPress={() => navigation.navigate("Products")}
        label={"Products"}
      />
      <PrimaryBtn
        onPress={() => navigation.navigate("Setting")}
        label={"Setting"}
      />
      <PrimaryBtn
        onPress={() => navigation.navigate("Profile")}
        label={"Profile"}
      />
      <PrimaryBtn
        onPress={() => navigation.navigate("About")}
        label={"About"}
      />
    </View>
  );
};
