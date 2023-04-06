import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";

function Map() {
    const dispatch = useDispatch()
    const sport = useSelector((state) => state.sport);

    // console.log(sport)


  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {/* <Marker></Marker>w */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
export default Map;
