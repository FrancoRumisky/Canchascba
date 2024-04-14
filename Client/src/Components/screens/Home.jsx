//Imports React
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@react-native-material/core";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
//imports Expo
import * as Location from "expo-location";
import Icon from "@expo/vector-icons/MaterialIcons";
//imports Redux
import {
  getSports,
  getCompaniesBySport,
  getIdSport,
} from "../../redux/actions";
//import globalvars
import { Colors } from "../Styles/Colors";

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: -60,
    marginBottom: 30,
    // fontWeight: 700,
    fontSize: 28,
  },
  image: {
    margin: 10,
  },
  iconButtonSports: {
    width: 130,
    height: 130,
    backgroundColor: "transparent",

    borderRadius: 0,
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

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const sports = useSelector((state) => state.allSports);
  const loading = useSelector((state) => state.loading);

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
    dispatch(getSports());
  }, [dispatch, isFocused]);

  const handleClick = (id) => {
    dispatch(getCompaniesBySport(id));
    dispatch(getIdSport(id));
    navigation.navigate("Datepicker");
  };

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={Colors.red} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un deporte</Text>
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
                    <Icon name={e.img} style={{ fontSize: 90 }} {...props} />
                  )}
                />
              </ImageBackground>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Home;
