import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    fontFamily: "MATURASC",
    backgroundColor: Colors.black,
  },
  textError:{
    color:"red",
    marginLeft:16
  }
});

const imageBackground = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
});

export { styles, imageBackground };
