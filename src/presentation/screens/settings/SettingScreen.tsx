import { Text, View } from "react-native";
import { globalStyle } from "../../theme/theme";
import { PrimaryBtn } from "../../shared/PrimaryBtn";
import { StackActions, useNavigation } from "@react-navigation/native";

export const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyle.constainer}>
      <Text>settingScreen</Text>

      <PrimaryBtn
        onPress={() => navigation.goBack()}
        label="Go Back"
      />
      <PrimaryBtn
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        label="Go Home"
      />
    </View>
  );
};
