import React,{useEffect} from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@react-native-material/core";
import { getLocation } from "../../redux/actions";
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

function UbicacionFiltro() {
  const ubicacion = useSelector((state) => state.ubicacion);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getLocation())
  },[])

  return (<View style={styles.modalView}>
    <View style={styles.modalText}>
      {ubicacion?.length && ubicacion.map((e,i) => {
        return (
          <View key={i} style={styles.icon}>
            <Button
              compact="true"
              tintColor={Colors.black}
              color="white"
              pressEffectColor={Colors.red}
            //   onPress={}
              title={e}
              leading={(props) => <IconMaterial name="location-city" {...props} />}
            />
          </View>
        );
      })}
    </View>
  </View>);
}

export default UbicacionFiltro;
