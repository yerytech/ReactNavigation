import { View } from "react-native";
import { globalStyle } from "../../theme/theme";
import { PrimaryBtn } from "../../shared/PrimaryBtn";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
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
