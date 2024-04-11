import { Button, TextInput } from "@react-native-material/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../Styles/General";
import { Colors } from "../Styles/Colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { login } from "../../redux/actions";
import { useDispatch } from "react-redux";

//! corregir fuentes

const Login = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.navigate("Home");
  };

  const handlePressLogin = () => {
    dispatch(login({user: "framqoo@gmail.com", pass:"1234"}))
    setLoading(true);
    // setTimeout(() => {
    //   handlePress();
    // }, 2000);
  };

  return (
    <View style={styles.container}>
      <TextInput variant="outlined" label="Usuario" style={{ margin: 16 }} />
      <TextInput variant="outlined" label="Contraseña" style={{ margin: 16 }} />
      <Button
        color={Colors.red}
        title="Ingresar"
        loading={loading}
        loadingIndicatorPosition="trailing"
        onPress={handlePressLogin}
        style={{ margin: 16 }}
      />
      <Text style={style.text1}>Olvide mi contraseña</Text>
      <Text style={style.text2}>Aun no tiene cuenta?</Text>
      <Button
        color={Colors.red}
        title="Registrese"
        onPress={handlePress}
        style={{ margin: 16 }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text1: {
    display: "flex",
    alignSelf: "flex-end",
    color: "#FFF",
    margin: 16,
  },
  text2: {
    alignSelf: "center",
    color: "#FFF",
    marginTop: 60,
  },
});

export default Login;
