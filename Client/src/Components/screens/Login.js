import { Button, TextInput } from "@react-native-material/core";
import React from "react";
import { View,Text } from "react-native";
import { styles } from "../Styles/General";

//! corregir fuentes

const Login = ({navigation}) => {
const handlePress = () => {
  navigation.navigate("Home")
}

  return <View style={styles.container}><TextInput variant="outlined" label="Usuario" style={{ margin: 16 }} /><TextInput variant="outlined" label="Contraseña" style={{ margin: 16 }} />
  <Button title="Ingresar" onPress={handlePress} /></View>;
};

export default Login;
