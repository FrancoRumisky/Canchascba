import { Button, TextInput, IconButton } from "@react-native-material/core";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { styles } from "../Styles/General";
import { Colors } from "../Styles/Colors";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { login } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

//! corregir fuentes

const Login = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = React.useState(false);
  const [SecureText, setSecureText] = React.useState(true);
  const dispatch = useDispatch();
  const useAuth = useSelector((state) => state.userAuth);
  const [data, setData] = React.useState({
    user: "",
    pass: "",
  });

  const handlePress = () => {
    navigation.navigate("Home");
  };

  const handlePressLogin = () => {
    dispatch(login(data));
    setLoading(true);
  };

  React.useEffect(() => {
    Object.hasOwn(useAuth, "ok")
      ? setTimeout(() => {
          handlePress();
        }, 1000)
      : setLoading(false);
  }, [useAuth, isFocused]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/002/082/394/original/abstract-header-with-red-and-black-layers-above-each-other-modern-design-banner-for-your-business-illustration-with-oblique-stripes-and-lines-vector.jpg",
        }}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            display: "flex",
            alignSelf: "center",
            marginTop: 0,
          }}
          source={require("../../../assets/Logo.png")}
        />
        <TextInput
          color={Colors.black}
          value={data.user}
          onChangeText={(text) => setData({ ...data, user: text })}
          variant="outlined"
          label="Email"
          style={{ margin: 16 }}
        />
        <TextInput
          color={Colors.black}
          secureTextEntry={SecureText}
          value={data.pass}
          onChangeText={(text) => setData({ ...data, pass: text })}
          variant="outlined"
          label="Contraseña"
          style={{ margin: 16 }}
          trailing={(props) => (
            <IconButton
              onPress={() => setSecureText(!SecureText)}
              icon={(props) => <Icon name="eye" {...props} />}
              {...props}
            />
          )}
        />
        {useAuth.error ? <Text> {useAuth.error} </Text> : ""}
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
      </ImageBackground>
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
