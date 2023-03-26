import React from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const CanchasXEmpresaYDeporte = () => {
  const fieldsByCS = useSelector((state) => state.fieldsByCS);
  const company = useSelector((state) => state.company);

  console.log(fieldsByCS);
  console.log(company);

  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {fieldsByCS.length &&
            fieldsByCS.map((f) => {
              return (
                <TouchableOpacity>
                  <Image
                    style={{ width: 200, height: 100 }}
                    source={{
                      uri: "https://tucespedartificial.es/wp-content/uploads/2020/08/grass-2616911_1920-1024x683.jpg",
                    }}
                  />
                  <Text>{f.tipo}</Text>
                  <Text>{f.tamaño}</Text>
                  <Text>{f.cubierta}</Text>
                  <Text>${f.precioPorHora}</Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CanchasXEmpresaYDeporte;
