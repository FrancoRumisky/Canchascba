import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { useSelector } from "react-redux";
import { Button, Pressable } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../Styles/Colors";
import DeporteFiltro from "./DeporteFiltro";
import UbicacionFiltro from "./UbicacionFiltro";
import ServicioFiltro from "./ServiciosFiltro";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "98%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
    elevation: 2,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.red,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

function TemplateFiltro({ title, name }) {
  const [modalVisible, setModalVisible] = useState(false);
  const companiesBySport = useSelector((state) => state.companiesBySport);
  const titlereplace = title.replace(/["']/g, "");
  const [filter, setFilter] = useState({
    Ubicacion: <UbicacionFiltro />,
    Deporte: <DeporteFiltro />,
    Servicios: <ServicioFiltro />,
  });

  // useEffect(() => {
  //   if(modalVisible){
  //     setModalVisible(false)
  //   }
  // }, [companiesBySport]);


  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {filter[titlereplace]}
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button
        style={{ margin: 8, borderWidth: 1, borderColor: Colors.red }}
        title={title}
        uppercase={false}
        color={Colors.red}
        variant="text"
        leading={(props) => <Icon name={name} {...props} />}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Button>
    </View>
  );
}

export default TemplateFiltro;
