import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: "#F7F7F7",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1B1B1F",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#6C6C80",
    marginBottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginBottom: 20,
  },

  categoryContainer: {
    marginBottom: 24,
  },

  categoryTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6C6C80",
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  footerSpacing: {
    height: 100,
  },
});