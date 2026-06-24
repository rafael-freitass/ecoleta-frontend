import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

  // =====================
  // INDEX / BLOQUEIO
  // =====================

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#F5F7FA",
  },

  message: {
    fontSize: 18,
    textAlign: "center",
    color: "#344054",
    fontWeight: "600",
    maxWidth: 350,
  },


  // =====================
  // LOGIN
  // =====================

  loginCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 30,
    gap: 18,
    elevation: 5,
  },

  loginTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#101828",
    textAlign: "center",
  },

  loginSubtitle: {
    fontSize: 15,
    color: "#667085",
    textAlign: "center",
    marginBottom: 10,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
  },

  button: {
    marginTop: 8,
  },

  error: {
    color: "#D92D20",
    textAlign: "center",
    fontSize: 14,
  },


  // =====================
  // PAINEL
  // =====================

  painel: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 30,
  },

  painelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  painelTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#101828",
  },

  table: {
    flex: 1, 
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 20,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#EAECF0",
  },

  infoContainer: {
    flex: 1,
    marginRight: 20,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#344054",
  },

  info: {
    fontSize: 14,
    color: "#667085",
    marginTop: 4,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },

});