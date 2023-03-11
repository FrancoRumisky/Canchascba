import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {getUsers} from "../../redux/actions"

const Home = ({ navigation }) => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)

  useEffect(()=>{
    dispatch(getUsers())
  },[])

  console.log(users)


  return (
    <View style={styles.container}>
      <Text>Holaaaa!</Text>
      <Text>{users.length}</Text>
      <StatusBar style="auto" />
      <Button
        title="Home1"
        onPress={() => {
          navigation.navigate("Home1");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
