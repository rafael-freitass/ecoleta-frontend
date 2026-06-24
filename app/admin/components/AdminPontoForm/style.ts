import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
    fontSize: 15,
    color: "#101828",
  },
  multiline: {
    height: 90,
    paddingTop: 12,
  },
  form: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 25,
    gap: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 5,
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#F2F4F7",
    borderRadius: 8,
  },
  backButtonText: {
    color: "#344054",
    fontSize: 14,
    fontWeight: "600",
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#101828",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#344054",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  rowCentered: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  timeSeparator: {
    fontWeight: "bold",
    color: "#344054",
  },
  timeText: {
    marginHorizontal: 8,
    color: "#344054",
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    backgroundColor: "#FFFFFF",
  },
  chipSelected: {
    backgroundColor: "#16A34A",
    borderColor: "#16A34A",
  },
  chipText: {
    color: "#344054",
    fontSize: 14,
  },
  chipTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "#16A34A",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});