//imports React
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { AppBar } from "@react-native-material/core";
import TemplateFiltro from "./TemplateFiltro";


function Filtros() {
  return (
    <>
      <AppBar
        color="white"
        leadingContainerStyle={{ width: "106%" }}
        leading={(props) => (
          <ScrollView horizontal={true}>
            <TemplateFiltro title="Ubicacion" name="map-search" />
            <TemplateFiltro title="Deporte" name="soccer-field" />
            <TemplateFiltro title="Servicios" name="cogs" />
          </ScrollView>
        )}
      />
    </>
  );
}

export default Filtros;
