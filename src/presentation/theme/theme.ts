import { StyleSheet } from "react-native";

export const globalColors = {
  primary: "#7037eb",
  secondary: "#3a0ca3",
  white: "#fff",
};

export const globalStyle = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.white,
  },

  btnPrimary: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,

    width: "100%",
    alignItems: "center",
  },

  btnText: {
    color: globalColors.white,
    fontSize: 18,
  },
});
