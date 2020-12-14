import react from "react";
import {StyleSheet} from "react-native";

const globalStyle = StyleSheet.create({
    mainButton: {
        backgroundColor: "#8A2BE2",
        paddingVertical: 12,
        width: 280,
        borderRadius: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: "#FFF",
  
    },
    agreeButton: {
        backgroundColor: "#07da63",
        paddingVertical: 12,
        width: 140,
        borderRadius: 15,
        margin: 20,

  
    },
    declineButton: {
        backgroundColor: "#e12120",
        paddingVertical: 12,
        width: 140,
        borderRadius: 15,
        margin: 20,
        position: "relative",
  
    },
    mainView:{
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#8A2BE2"
    },
    registerInput:{
        borderRadius: 15,
        width: 280,
        borderColor: "purple",
        borderWidth: 2,
        fontSize: 20,
        height: 50,
        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 30
    },
    loginButton: {
        backgroundColor: "#8A2BE2",
        paddingVertical: 12,
        width: 280,
        borderRadius: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: "#FFF",
  
    },
    h1:{
        fontSize: 64,
        color: "#FFF",
    },
    h4:{
        fontSize: 13,
        color: "#FFF",
        paddingBottom: 210,
    },
    h2:{
        fontSize: 40,
        color: "#8A2BE2",
        marginTop: -220,
        marginLeft: 15,
        marginBottom: 80,
    },
    h3:{
        fontSize: 25,
        color: "#FFF",
        marginBottom: 50,
    },
    registerView:{
        flex: 1,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    profileText:{
        backgroundColor:"#32174d", 
        width:250, 
        borderRadius:10, 
        padding:10, 
        color:"#FFF",
        marginTop: 5,
        marginBottom: 5,
    },
    joinText:{
        backgroundColor:"#32174d", 
        width:290, 
        borderRadius:10, 
        padding:20, 
        color:"#FFF",
        marginTop: 20,
        marginBottom: -30,
    },

  });

  export default globalStyle;
