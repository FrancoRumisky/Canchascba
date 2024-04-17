import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
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
  const statuPass = useSelector((state) => state.statusPass);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  const handlePressLogin = () => {
    dispatch(chagePassword(data));
    setLoading(true);
  };

  React.useEffect(() => {
    if (Object.hasOwn(statuPass, "error")) setLoading(false);
  }, [isFocused, statuPass]);

  return (
    <View>
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
      {statuPass?.error ? <Text> {statuPass?.error} </Text> : ""}
      <Button
        color={Colors.red}
        title="Cambiar contraseña"
        loading={loading}
        loadingIndicatorPosition="trailing"
        onPress={handlePressLogin}
        style={{ margin: 16 }}
      />
    </View>
  );
};

export default ChangePassword;
