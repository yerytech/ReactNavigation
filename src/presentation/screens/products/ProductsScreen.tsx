import { FlatList, Text, View } from "react-native";
import { globalStyle } from "../../theme/theme";
import { PrimaryBtn } from "../../shared/PrimaryBtn";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParams } from "../../routes/StackNavigator";

const products = [
  { id: 1, name: "product1" },
  { id: 2, name: "product2" },
  { id: 3, name: "product3" },
  { id: 4, name: "product4" },
  { id: 5, name: "product5" },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyle.constainer}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}> Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryBtn
            onPress={() =>
              navigation.navigate("Product", { id: item.id, name: item.name })
            }
            label={item.name}
          />
        )}
      />
      <Text style={{ marginBottom: 10, fontSize: 30 }}> Ajustes</Text>
      <PrimaryBtn
        onPress={() => navigation.navigate("Setting")}
        label="Ajustes"
      />
    </View>
  );
};
