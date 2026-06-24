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

    form:{
        width:"100%",
        maxWidth:600,
        backgroundColor:"#FFFFFF",
        borderRadius:16,
        padding:25,
        gap:15,
    },

    formTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"#101828",
        marginBottom:10,
    }
});