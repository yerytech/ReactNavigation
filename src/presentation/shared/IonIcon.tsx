import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  size?: number;
  name: keyof typeof Ionicons.glyphMap;
  color?: string;
}
export const IonIcon = ({
  name,
  size = 25,
  color = "black",
  ...props
}: Props) => {
  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
      {...props}
    />
  );
};
