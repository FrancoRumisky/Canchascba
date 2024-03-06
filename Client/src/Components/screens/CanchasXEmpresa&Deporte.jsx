import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Surface } from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";

const CanchasXEmpresaYDeporte = () => {
  const fieldsByCS = useSelector((state) => state.fieldsByCS);
  const company = useSelector((state) => state.company);

  console.log(fieldsByCS);
  console.log(company);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          src={company.imagen}
          resizeMode="cover"
          style={styles.imagen}
        >
          <Text style={styles.text}>{company.nombre}</Text>
          <Text>{company.calle}</Text>
        </ImageBackground>
      </View>
      <View style={{position:"relative", top:-20}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff",
    borderTopStartRadius:25,
    borderTopRightRadius:25,
    paddingTop: 50,
  },
  imagen: {
    // flex:1,
    justifyContent: "center",
    height: 200,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CanchasXEmpresaYDeporte;
