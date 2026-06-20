import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    backgroundColor:"#fff",
    borderRadius:16,
    padding:16,
    marginHorizontal:20,
    marginBottom:18,
    elevation:4,
    shadowColor:"#000",
    shadowOpacity:0.15,
    shadowRadius:6,
    shadowOffset:{
      width:0,
      height:3
    }
  },

  nome:{
    fontSize:16,
    fontWeight:"700",
    color:"#111",
    marginBottom:12
  },

  infoContainer:{
    gap:6
  },

  info:{
    fontSize:13,
    color:"#4b5563"
  },

  infoRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:8,
  },

  button:{
    flexDirection:"row",
    gap:8,
    marginTop:15,
    backgroundColor:"#00B85A",
    height:42,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontWeight:"700",
    fontSize:14
  }
});