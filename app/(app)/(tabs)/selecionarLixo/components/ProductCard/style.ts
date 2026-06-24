import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: 110,
    height: 100,

    borderWidth: 1,
    borderColor: "#DDE2E5",
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F5F6F7",
  },

  containerSelected: {
    borderColor: "#34CB79",
    backgroundColor: "#F0FFF5",
  },

  label: {
    fontSize: 13,
    color: "#5C677D",
    marginTop: 8,
    textAlign: "center",
  },

  labelSelected: {
    color: "#34CB79",
    fontWeight: "500",
  },

  button: {
    marginRight: 10,
    marginBottom: 10,
  },
});