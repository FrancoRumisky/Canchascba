import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@react-native-material/core";
import { getCompaniesBySport, setFilters } from "../../redux/actions";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import IconMaterial from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../Styles/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect } from "react";

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

    useEffect(() => {
      console.log(filter);
      // if (Object.entries(checkboxState).length > 0) {
      //   if (filter.length > 0) {
      //     dispatch(setFilters(filter));
      //   } else {
      //     dispatch(getCompaniesBySport(currentSport));
      //   }
      // }
    }, [filter, checkboxState]);

  const handlePress = (srv) => {
    setCheckboxState({ ...checkboxState, [srv]: !checkboxState[srv] })
    if (!filter.includes(srv)) {
      setFilter([...filter, srv]);
    } else {
      index = filter.indexOf(srv);
      filter.splice(index, 1);
    }
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
                onPress={() => handlePress("Estacionamiento")}
                title="Estacionamiento"
                uppercase={false}
                leading={(props) => <Icon name="car" {...props} />}
                trailing={() => (
                  <BouncyCheckbox
                    style={{ marginTop: 0 }}
                    fillColor={Colors.red}
                    innerIconStyle={{
                      borderColor: !checkboxState["Estacionamiento"] ? Colors.black : "white",
                      borderRadius: 2,
                    }}
                    disableText={true}
                    isChecked={checkboxState["Estacionamiento"]}
                    size={14}
                    disableBuiltInState
                  />
                )}
              />
            </View>
            <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={(e) => handlePress("Parrilla")}
                title="Parrilla"
                uppercase={false}
                leading={(props) => <Icon name="grill" {...props} />}
                trailing={() => (
                  <BouncyCheckbox
                    style={{ marginTop: 0 }}
                    fillColor={Colors.red}
                    innerIconStyle={{
                      borderColor: !checkboxState["Parrilla"] ? Colors.black : "white",
                      borderRadius: 2,
                    }}
                    disableText={true}
                    isChecked={checkboxState["Parrilla"]}
                    size={14}
                    disableBuiltInState
                  />
                )}
              />
            </View>
            <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={(e) => handlePress("Bar")}
                title="Bar"
                uppercase={false}
                leading={(props) => <Icon name="food-fork-drink" {...props} />}
                trailing={() => (
                  <BouncyCheckbox
                    style={{ marginTop: 0 }}
                    fillColor={Colors.red}
                    innerIconStyle={{
                      borderColor: !checkboxState["Bar"] ? Colors.black : "white",
                      borderRadius: 2,
                    }}
                    disableText={true}
                    isChecked={checkboxState["Bar"]}
                    size={14}
                    disableBuiltInState
                  />
                )}
              />
            </View>
            <View style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={(e) => handlePress("Duchas")}
                title="Duchas"
                uppercase={false}
                leading={(props) => <Icon name="shower-head" {...props} />}
                trailing={() => (
                  <BouncyCheckbox
                    style={{ marginTop: 0 }}
                    fillColor={Colors.red}
                    innerIconStyle={{
                      borderColor: !checkboxState["Duchas"] ? Colors.black : "white",
                      borderRadius: 2,
                    }}
                    disableText={true}
                    isChecked={checkboxState["Duchas"]}
                    size={14}
                    disableBuiltInState
                  />
                )}
              />
            </View>
      </View>
    </View>
  );
}

export default ServiciosFiltro;