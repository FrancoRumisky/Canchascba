import { StyleSheet } from "react-native";
import {Colors} from "./Colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexDirection:"column",
        // alignItems:"center",
        justifyContent:"center",
        fontFamily:"MATURASC",
        backgroundColor:Colors.black
    }
})

const imageBackground = StyleSheet.create({
    image:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.black
    }
})

export {styles, imageBackground}