import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CanchasXEmpresaYDeporte = () => {
  const fieldsByCS = useSelector((state) => state.fieldsByCS);
  const company = useSelector((state) => state.company);

  // console.log(fieldsByCS);
  // console.log(company);

  return (
    <View>
      <ScrollView>
      <View style={styles.container}>
          {fieldsByCS.length > 0 &&
            fieldsByCS?.map((f) => {
              return (
                <TouchableOpacity key={f.id}>
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
      </View>
      </ScrollView>
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
