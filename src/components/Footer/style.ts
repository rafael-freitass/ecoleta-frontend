import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 70,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    elevation: 8,
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 12,
    marginTop: 4,
    color: "#6C6C80",
  },

  titleActive: {
    color: "#34CB79",
  },
});