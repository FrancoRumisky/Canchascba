import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@react-native-material/core";
import { StyleSheet, Text, View, Button } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { getSports } from "../../redux/actions";
import Icon from "@expo/vector-icons/MaterialIcons";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const sports = useSelector((state) => state.sports);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getSports());
    }
  }, [sports, isFocused]);

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
        {sports?.map((e) => (
          <View key={e.id} style={{ alignItems: "center" }}>
            
            <Text style={{}}>{e.nombre}</Text>
            
            <IconButton
              style={styles.iconButtonSports}
              color="black"
              icon={(props) => (
                <Icon
                  name={setImg(e.nombre)}
                  style={{ fontSize: 90 }}
                  {...props}
                />
              )}
            />
        
          </View>
        ))}
      </View>
      <Button
        title="Home1"
        onPress={() => {
          navigation.navigate("Home1");
        }}
      />
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
  iconButtonSports: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    
    borderRadius: 0,
    margin: 10,
    shadowColor: "#ddd",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,

    elevation: 5,
  },

});

export default Home;
