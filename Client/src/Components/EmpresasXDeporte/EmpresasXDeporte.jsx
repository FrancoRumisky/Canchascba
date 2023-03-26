//Imports React
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";
//Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getFieldsByCompanyAndSport,
  getCompanieById,
} from "../../redux/actions";
//Imports Styles
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/Colors";

const CompaniesBySport = ({ navigation }) => {
  const companiesBySport = useSelector((state) => state.companiesBySport);
  const dispatch = useDispatch();

  const screenHeight = Dimensions.get("window").height;

  const handleClick = (idcompany, idsport) => {
    dispatch(getFieldsByCompanyAndSport(idcompany, idsport));
    dispatch(getCompanieById(idcompany));
    navigation.navigate("CanchasXEYD");
  };

  if (companiesBySport.length === 0)
    return (
      <View>
        <Text>No Hay Canchas Para Mostrar</Text>
      </View>
    );

  return (
    <View style={{ height: screenHeight }}>
      <ScrollView>
        <View style={styles.container}>
          {companiesBySport.length !== 0 &&
            companiesBySport?.map((e) => {
              return (
                <TouchableOpacity
                  style={{ width: "50%" }}
                  key={e.id}
                  onPress={() =>
                    handleClick(
                      e.id,
                      e.Deportes.map((e) => e.id)
                    )
                  }
                >
                  <Image
                    style={{ width: 200, height: 100 }}
                    source={{
                      uri: "https://tucespedartificial.es/wp-content/uploads/2020/08/grass-2616911_1920-1024x683.jpg",
                    }}
                  />
                  <Text>{e.nombre}</Text>
                  <Text>{e.direccion}</Text>
                  <Text>{e.horarios?.map((e) => e).join("-")}</Text>
                  {e.Servicios.map((s) => {
                    return (
                      <View key={e.id}>
                        <Text>
                          {s.estacionamiento ? "estacionamiento" : null}
                        </Text>
                        <Text>{s.parrilla ? "parrilla" : null}</Text>
                        <Text>{s.duchas ? "duchas" : null}</Text>
                        <Text>{s.bar ? "bar" : null}</Text>
                        <Text>{s.otros ? s.otros : null}</Text>
                      </View>
                    );
                  })}
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      <IconButton
        color="white"
        onPress={() => navigation.navigate("Map")}
        style={styles.btnMap}
        icon={(props) => (
          <Icon name="google-maps" style={{ fontSize: 30 }} {...props} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 110,
  },
  btnMap: {
    position: "absolute",
    bottom: "14%",
    right: "3%",
    backgroundColor: Colors.red,
  },
});

export default CompaniesBySport;
