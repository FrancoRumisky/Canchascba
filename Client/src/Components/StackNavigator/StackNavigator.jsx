// Imports React Native
import { createStackNavigator } from "@react-navigation/stack";
import { Image,View,Text } from "react-native";
// Imports Components
import Home from "../Home/Home";
import Canchas from "../Canchas/Canchas";
import DetallesCancha from "../DetallesCancha/DetallesCancha";

const Stack = createStackNavigator();


export default function StackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Canchas" component={Canchas} />
          <Stack.Screen name="Detalles" component={DetallesCancha} />
        </Stack.Navigator>
        )
        }