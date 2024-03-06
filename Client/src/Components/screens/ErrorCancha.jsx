import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, getCompaniesBySport } from "../../redux/actions";
import Icon from "@expo/vector-icons/MaterialIcons";

export const ErrorCancha = () => {
  const dispatch = useDispatch();
  const idSport = useSelector((state) => state.idSport)

  
  return (
    <View>
      <Text>No Hay Canchas Para Mostrar</Text>
      <Button
        title="Actualizar"
        onPress={()=>dispatch(getCompaniesBySport(idSport))}
      />
    </View>
  );
};
