import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Button, TextInput, IconButton } from "@react-native-material/core";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../Styles/Colors";
import { styles } from "../Styles/General";
import { forgotPassword } from "../../redux/actions";
import { useIsFocused } from "@react-navigation/native";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState("");

  const userAuth = useSelector((state) => state.userAuth);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  console.log(userAuth)

  const handlePressLogin = () => {
    dispatch(forgotPassword(data));
    setLoading(true);
  };

  React.useEffect(() => {
    if (userAuth.info) setLoading(false);
  }, [userAuth, isFocused]);

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
        {userAuth.info ? (
          <Button
            olor={Colors.red}
            title="prueba"
            onPress={handlePressLogin}
            style={{ margin: 16 }}
          />
        ) : (
          <View>
            <TextInput
              color={Colors.black}
              value={data}
              onChangeText={(text) => setData(text)}
              variant="outlined"
              label="Email"
              style={{ margin: 16 }}
            />

            {userAuth.message ? <Text> {userAuth.error} </Text> : ""}
            <Button
              color={Colors.red}
              title="Recuperar contraseña"
              loading={loading}
              loadingIndicatorPosition="trailing"
              onPress={handlePressLogin}
              style={{ margin: 16 }}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
