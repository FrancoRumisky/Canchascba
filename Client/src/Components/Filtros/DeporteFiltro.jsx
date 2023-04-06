import React from "react";
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

function DeporteFiltro() {
  const sports = useSelector((state) => state.allSports);
  const dispatch = useDispatch();

  const handlePress = (id) => {
    dispatch(getCompaniesBySport(id));
  };

  return (
    <View style={styles.modalView}>
      <View style={styles.modalText}>
        {sports.length  && sports.map((e) => {
          return (
            <View key={e.id} style={styles.icon}>
              <Button
                compact="true"
                tintColor={Colors.black}
                color="white"
                pressEffectColor={Colors.red}
                onPress={() => handlePress(e.id)}
                title={e.nombre}
                leading={(props) => <IconMaterial name={e.img} {...props} />}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default DeporteFiltro;
