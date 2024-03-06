import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { imageBackground } from "../Styles/General";

const Splash = ({navigation}) => {


    useFocusEffect(
        React.useCallback(() => {
          setTimeout(() => {
            navigation.navigate("Login");
          }, 5000);
        }, [])
      );  


  return (
    <View style={imageBackground.image}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
      <Animatable.Image
      animation="pulse"
      easing="ease-out"
      iterationCount="infinite"
      style={{width: 200, height: 200, margin:100}}
      source={require("../../../assets/Logo.png")} 
      />
    </View>
  );
};

export default Splash;
