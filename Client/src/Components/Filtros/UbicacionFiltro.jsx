import React,{useEffect} from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@react-native-material/core";
import { getLocation, filterByLocation } from "../../redux/actions";
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
  const companiesBySport = useSelector((state) => state.companiesBySport);
  const dispatch = useDispatch();

  const currentSport = companiesBySport[0].Deportes[0].id

  useEffect(()=>{
    dispatch(getLocation())
  },[])

  const handlePress = (e) => {
    dispatch(filterByLocation(currentSport,e))
  }


  return (<View style={styles.modalView}>
    <View style={styles.modalText}>
      {ubicacion.length > 0 && ubicacion?.map((e,i) => {
        return ( 
          <View key={i} style={styles.icon}>
            <Button
              compact="true"
              tintColor={Colors.black}
              color="white"
              pressEffectColor={Colors.red}
              onPress={() => handlePress(e)}
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
