import { Pressable, Text } from "react-native";
import { globalStyle } from "../theme/theme";

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryBtn = ({ onPress, label }: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={globalStyle.btnPrimary}
    >
      <Text style={globalStyle.btnText}> {label}</Text>
    </Pressable>
  );
};
