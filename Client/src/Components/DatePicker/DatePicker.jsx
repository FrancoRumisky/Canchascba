import React, { useEffect, useState } from "react";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@react-native-material/core";
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
import { getSports, getCompaniesBySport } from "../../redux/actions";
//import globalvars
import { Colors } from "../Styles/Colors";

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: -60,
    marginBottom: 30,
    fontWeight: 700,
    fontSize: 25,
  },
  image: {
    margin: 10,
  },
  iconButtonSports: {
    width: 130,
    height: 130,
    backgroundColor: "transparent",

    borderRadius: 0,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,

    elevation: 4,
  },
});

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState("");

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

  console.log(selectedDate);

  return (
    <DatePicker
      options={{
        backgroundColor: "#090C08",
        textHeaderColor: "#FFA25B",
        textDefaultColor: "#F6E7C1",
        selectedTextColor: "#fff",
        mainColor: "#F4722B",
        textSecondaryColor: "#D6C7A1",
        borderColor: "rgba(122, 146, 165, 0.1)",
      }}
      onSelectedChange={(date) => setSelectedDate(date)}
      minuteInterval={30}
      minimumDate={getToday()}
      maximumDate={nextMonthorYear(getToday())}
      selected={getToday()}
      style={{ borderRadius: 10 }}
    />
  );
}

export default Datepicker;
