import React, { useEffect, useState } from "react";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { Button } from "@react-native-material/core";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
//imports Expo
import * as Location from "expo-location";
import Icon from "@expo/vector-icons/MaterialIcons";
//imports Redux
import { setDate } from "../../redux/actions";
//import globalvars
import { Colors } from "../Styles/Colors";

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    margin:20
  },
  title: {
    marginTop: -60,
    marginBottom: 30,
    // fontWeight: 700,
    fontSize: 25,
    color:Colors.red
  },
});

function Datepicker({ navigation }) {
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = useState("");
  const currentDate = useSelector((state) => state.date)

  function nextMonthorYear(date) {
    const today = date;
    const todayArr = today.split("/");
    const month = parseInt(todayArr[1]);
    if (month < 12) {
      const nextMonth = month + 1;
      return todayArr[0] + "/" + nextMonth + "/" + todayArr[2];
    }
    const year = parseInt(todayArr[0]);
    const nextYear = year + 1;
    return nextYear + "/" + 1 + "/" + todayArr[2];
  }

  const handlePress = () => {
    dispatch(setDate(selectedDate));
    navigation.navigate("EmpresasXDeporte");
  };
 
  // const getHours = () => {
  //   var today = new Date();
  //   var options = { hour: "numeric", minute: "numeric" };
  //   var horaInicio = today.toLocaleString("es", options);
  //   var arrHora = horaInicio.split(":");
  //   if (arrHora[1] > 30) {
  //     return arrHora[0] + ":" + 30;
  //   } else {
  //     return arrHora[0];
  //   }
  // };

  // const date = getToday() + " "+ getHours();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una fecha y hora</Text>
      <DatePicker
        options={{
          backgroundColor: "white",
          textHeaderColor: Colors.red,
          textDefaultColor: Colors.black,
          selectedTextColor: "#fff",
          mainColor: Colors.red,
          textSecondaryColor: "gray",
          borderColor: Colors.red,
        }}
        onSelectedChange={(date) => setSelectedDate(date)}
        minuteInterval={30}
        minimumDate={getToday()}
        maximumDate={nextMonthorYear(getToday())}
        selected={getToday()}
        style={{ borderRadius: 10 , borderWidth:1, borderColor: Colors.red, }}
      />
      <Button
        style={{ marginTop: 20 }}
        uppercase={false}
        color={Colors.red}
        
        onPress={() => handlePress()}
        title="Seleccionar"
      />
    </View>
  );
}

export default Datepicker;
