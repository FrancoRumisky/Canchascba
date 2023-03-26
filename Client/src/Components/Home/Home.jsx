import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import { IconButton } from "@react-native-material/core";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { getSports, getCompaniesBySport } from "../../redux/actions";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../Styles/Colors";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const sports = useSelector((state) => state.allSports);
  const isFocused = useIsFocused();
  const companiesBySport = useSelector((state) => state.companiesBySport);
  const [origin, setOrigin] = useState({
    latitud: "",
    longitud: "",
  });


  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitud: location.coords.latitude,
      longitud: location.coords.longitude,
    };
    setOrigin(current);
  }

  useEffect(() => {
    getLocationPermission();
  }, []);

  useEffect(() => {
    if (isFocused) {
      dispatch(getSports());
    }
  }, [dispatch, isFocused]);

  const setImg = (name) => {
    switch (name) {
      case "Futbol":
        return "sports-soccer";
      case "Basquet":
        return "sports-basketball";
      case "voley":
        return "sports-volleyball";
      case "tenis":
        return "sports-tennis";
      case "hockey":
        return "sports-hockey";
      case "paddle":
        return "sports-tennis";
      default:
        return "";
    }
  };

  const handleClick = (id) => {
    dispatch(getCompaniesBySport(id));
    navigation.navigate("EmpresasXDeporte");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: -60,
          marginBottom: 30,
          fontWeight: 700,
          fontSize: 25,
        }}
      >
        Selecciona un deporte
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sports.length > 0 &&
          sports.map((e) => (
            <View key={e.id} style={{ alignItems: "center" }}>
              <Text style={{}}>{e.nombre}</Text>
              <ImageBackground
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/002/082/394/original/abstract-header-with-red-and-black-layers-above-each-other-modern-design-banner-for-your-business-illustration-with-oblique-stripes-and-lines-vector.jpg",
                }}
                resizeMode="cover"
                style={styles.image}
              >
                <IconButton
                  style={styles.iconButtonSports}
                  onPress={() => handleClick(e.id)}
                  color="white"
                  icon={(props) => (
                    <Icon
                      name={setImg(e.nombre)}
                      style={{ fontSize: 90 }}
                      {...props}
                    />
                  )}
                />
              </ImageBackground>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 10,
  },
  iconButtonSports: {
    width: 130,
    height: 130,
    backgroundColor: "transparent",

    borderRadius: 0,
    // margin: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,

    elevation: 4,
  },
});

export default Home;
