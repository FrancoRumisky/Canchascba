import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@react-native-material/core";
import { getCompaniesBySport } from "../../redux/actions";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import IconMaterial from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../Styles/Colors";

const styles = StyleSheet.create({
    modalText: {
      textAlign: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    icon: {
      margin: 3,
    },
  });


function ServiciosFiltro(props) {

    const currentCompanies = useSelector((state) => state.currentCompanies);
    const dispatch = useDispatch();
    const [checkboxState, setCheckboxState] = useState({});
    const [filter, setFilter] = useState([]);

    const currentSport = currentCompanies[0].Deportes[0].id;

  const handlePress = (id) => {
    dispatch(getCompaniesBySport(id));
  };

  return (
    <View style={styles.modalView}>
      <View style={styles.modalText}>
      <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={() => handlePress(e.id)}
                title="Estacionamiento"
                uppercase={false}
                leading={(props) => <Icon name="car" {...props} />}
              />
            </View>
            <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={() => handlePress(e.id)}
                title="Parrilla"
                uppercase={false}
                leading={(props) => <Icon name="grill" {...props} />}
              />
            </View>
            <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={() => handlePress(e.id)}
                title="Bar"
                uppercase={false}
                leading={(props) => <Icon name="food-fork-drink" {...props} />}
              />
            </View>
            <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={() => handlePress(e.id)}
                title="Duchas"
                uppercase={false}
                leading={(props) => <Icon name="shower-head" {...props} />}
              />
            </View>
      </View>
    </View>
  );
}

export default ServiciosFiltro;