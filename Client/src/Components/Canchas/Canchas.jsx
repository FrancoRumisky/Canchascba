import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button} from "react-native";

const Canchas = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Home3"
        onPress={() => {
          navigation.navigate("Detalles");
        }}
      />
      <Text>Rumisky</Text>
      <StatusBar style="auto" />
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

export default Canchas;
