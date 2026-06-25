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
  padding: 24,
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


// botão novo

newButton: {
  backgroundColor: "#16A34A",
  paddingHorizontal: 18,
  paddingVertical: 12,
  borderRadius: 10,
  elevation: 3,
},

newButtonText: {
  color: "#FFFFFF",
  fontWeight: "700",
  fontSize: 15,
},



table: {
  flex: 1,
  backgroundColor: "#FFFFFF",
  borderRadius: 18,
  padding: 20,
  elevation: 4,
},


row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 18,
  borderBottomWidth: 1,
  borderColor: "#EAECF0",
},


name: {
  fontSize: 17,
  fontWeight: "700",
  color: "#101828",
},


info: {
  fontSize: 14,
  color: "#667085",
  marginTop: 5,
},



actions: {
  flexDirection: "row",
  gap: 8,
},



editButton: {
  backgroundColor: "#16A34A",
  paddingHorizontal: 14,
  paddingVertical: 9,
  borderRadius: 8,
},


deleteButton: {
  backgroundColor: "#FEE2E2",
  paddingHorizontal: 14,
  paddingVertical: 9,
  borderRadius: 8,
},


buttonText: {
  color: "#FFFFFF",
  fontWeight: "600",
},


deleteText: {
  color: "#DC2626",
  fontWeight: "600",
},

});