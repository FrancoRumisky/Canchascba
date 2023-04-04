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
import { IconButton, Avatar, Divider } from "@react-native-material/core";
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
//Imports Components
import Filtros from "../Filtros/Filtros";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 110,
  },
  btnMap: {
    position: "absolute",
    bottom: 130,
    right: "1%",
    backgroundColor: Colors.red,
  },
  txtServices: {
    marginTop: 4,
    marginLeft: 5,
    fontSize: 10,
  },
  card: {
    width:screenWidth - 20,
    height: 180,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
  },
  icon: {
    fontSize: 20,
  },
  btnSelectCard: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.red,
    padding: 7,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "28%",
    color:"white",
    paddingLeft:17,
    fontSize:13
    
  },
});




const CompaniesBySport = ({ navigation }) => {
  const companiesBySport = useSelector((state) => state.companiesBySport);
  const dispatch = useDispatch();


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
    <View style={{ height: screenHeight, }}>
      <Filtros />
      <ScrollView>
        <View style={styles.container}>
          {companiesBySport.length !== 0 &&
            companiesBySport?.map((e) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={e.id}
                  onPress={() =>
                    handleClick(
                      e.id,
                      e.Deportes.map((e) => e.id)
                    )
                  }
                >
                  <Image
                    style={{
                      width: 150,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                    source={{
                      uri: "https://tucespedartificial.es/wp-content/uploads/2020/08/grass-2616911_1920-1024x683.jpg",
                    }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Avatar
                        imageStyle={{ borderRadius: 10 }}
                        image={{
                          uri: "https://mui.com/static/images/avatar/1.jpg",
                        }}
                        size={40}
                        color={Colors.red}
                      />
                      <Text style={{ marginTop: 10, marginLeft: 5 }}>
                        {" "}
                        {e.nombre}
                      </Text>
                    </View>
                    <Divider
                      style={{ marginTop: 4, marginBottom: 5, width: 215 }}
                      color={Colors.red}
                    />
                    <Text>
                      <View style={{ flexDirection: "row" }}>
                        <Icon
                          color={Colors.red}
                          name="map-marker"
                          style={styles.icon}
                        />
                        <Text style={styles.txtServices}>{e.calle + e.cuidad}</Text>
                      </View>
                    </Text>
                    <Text>
                      <View style={{ flexDirection: "row" }}>
                        <Icon
                          color={Colors.red}
                          name="clock"
                          style={styles.icon}
                        />
                        <Text style={styles.txtServices}>
                          {e.horarios}
                        </Text>
                      </View>
                    </Text>
                    {e.Servicios.map((s) => {
                      return (
                        <View key={e.id}>
                          <Text>
                            {s.estacionamiento ? (
                              <View style={{ flexDirection: "row" }}>
                                <Icon
                                  color={Colors.red}
                                  name="car"
                                  style={styles.icon}
                                />
                                <Text style={styles.txtServices}>
                                  Estacionamiento
                                </Text>
                              </View>
                            ) : (
                              <View></View>
                            )}
                          </Text>
                          <Text>
                            {s.parrilla ? (
                              <View style={{ flexDirection: "row" }}>
                                <Icon
                                  color={Colors.red}
                                  name="grill"
                                  style={styles.icon}
                                />
                                <Text style={styles.txtServices}>parrilla</Text>
                              </View>
                            ) : (
                              <View></View>
                            )}
                          </Text>
                          <Text>
                            {s.duchas ? (
                              <View style={{ flexDirection: "row" }}>
                                <Icon
                                  color={Colors.red}
                                  name="shower-head"
                                  style={styles.icon}
                                />
                                <Text style={styles.txtServices}>duchas</Text>
                              </View>
                            ) : (
                              <View></View>
                            )}
                          </Text>
                          <Text>
                            {s.bar ? (
                              <View style={{ flexDirection: "row" }}>
                                <Icon
                                  color={Colors.red}
                                  name="food-fork-drink"
                                  style={styles.icon}
                                />
                                <Text style={styles.txtServices}>bar</Text>
                              </View>
                            ) : (
                              <View></View>
                            )}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                  <Text style={styles.btnSelectCard}>Seleccionar</Text>
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



export default CompaniesBySport;
