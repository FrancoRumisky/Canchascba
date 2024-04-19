import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import { Button, TextInput, IconButton } from "@react-native-material/core";
import { Colors } from "../Styles/Colors";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { chagePassword } from "../../redux/actions";

const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({ newPassword: "", token: "" });
  const statusPass = useSelector((state) => state.statusPass);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  const createAlert = () =>
    Alert.alert('Atencion!', 'Te enviamos el token a tu casilla de correo electronico!', [
      {text: 'OK'},
    ]);

    console.log(data)

  const handlePressLogin = () => {
    dispatch(chagePassword(data));
    setLoading(true);
  };

  React.useEffect(() => {
    if (Object.hasOwn(statusPass, "error")) setLoading(false);
  }, [isFocused, statusPass]);

  React.useEffect(() => {
    createAlert()
  },[]);

  return (
    <>
      <TextInput
        color={Colors.black}
        value={data.newPassword}
        onChangeText={(text) => setData({ ...data, newPassword: text })}
        variant="outlined"
        label="New Password"
        style={{ margin: 16 }}
      />
      <TextInput
        color={Colors.black}
        value={data.token}
        onChangeText={(text) => setData({ ...data, token: text })}
        variant="outlined"
        label="Token"
        style={{ margin: 16 }}
      />
      {statusPass?.error ? <Text style={styles.textError}> {statusPass?.error} </Text> : ""}
      <Button
        color={Colors.red}
        title="Cambiar contraseña"
        loading={loading}
        loadingIndicatorPosition="trailing"
        onPress={handlePressLogin}
        style={{ margin: 16 }}
      />
    </>
  );
};

export default ChangePassword;
