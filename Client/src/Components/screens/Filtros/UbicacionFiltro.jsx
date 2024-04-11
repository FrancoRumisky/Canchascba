import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@react-native-material/core";
import {
  getLocation,
  setFilters,
  getCompaniesBySport,
} from "../../../redux/actions"
import IconMaterial from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../../Styles/Colors"
import BouncyCheckbox from "react-native-bouncy-checkbox";

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

function UbicacionFiltro() {
  const ubicacion = useSelector((state) => state.ubicacion);
  const companiesBySport = useSelector((state) => state.companiesBySport);
  const dispatch = useDispatch();
  const [checkboxState, setCheckboxState] = useState({});
  const [filter, setFilter] = useState([]);

  const currentSport = companiesBySport[0]?.Deportes[0]?.id;

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  useEffect(() => {
    if (Object.entries(checkboxState).length > 0) {
      if (filter.length > 0) {
        dispatch(setFilters(filter));
      } else {
        dispatch(getCompaniesBySport(currentSport));
      }
    }
  }, [filter, checkboxState]);

  const handlePress = (idsport) => {
    setCheckboxState({ ...checkboxState, [idsport]: !checkboxState[idsport] });
    if (!filter.includes(idsport)) {
      setFilter([...filter, idsport]);
    } else {
      index = filter.indexOf(idsport);
      filter.splice(index, 1);
    }
  };

  return (
    <View style={styles.modalView}>
      <View style={styles.modalText}>
        {ubicacion.length > 0 &&
          ubicacion?.map((e, i) => {
            return (
              <View key={i} style={styles.icon}>
                <Button
                  compact="true"
                  tintColor={!checkboxState[e] ? Colors.black : "white"}
                  color={!checkboxState[e] ? "white" : Colors.red}
                  pressEffectColor={Colors.red}
                  onPress={() => handlePress(e)}
                  title={e}
                  leading={(props) => (
                    <IconMaterial name="location-city" {...props} />
                  )}
                  trailing={() => (
                    <BouncyCheckbox
                      style={{ marginTop: 0 }}
                      fillColor={Colors.red}
                      innerIconStyle={{
                        borderColor: !checkboxState[e] ? Colors.black : "white",
                        borderRadius: 2,
                      }}
                      disableText={true}
                      isChecked={checkboxState[e]}
                      size={14}
                      disableBuiltInState
                    />
                  )}
                />
              </View>
            );
          })}
      </View>
    </View>
  );
}

export default UbicacionFiltro;
