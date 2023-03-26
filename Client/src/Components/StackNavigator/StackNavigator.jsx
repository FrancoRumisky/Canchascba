// Imports React Native
import { createStackNavigator } from "@react-navigation/stack";
import { Image,View,Text } from "react-native";
// Imports Components
import Home from "../Home/Home";
import EmpresasXDeporte from "../EmpresasXDeporte/EmpresasXDeporte";
import CanchasXEmpresaYDeporte from "../CanchasXEmpres&Deporte/CanchasXEmpresa&Deporte";
import Map from "../Map/Map";

const Stack = createStackNavigator();


export default function StackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="EmpresasXDeporte" component={EmpresasXDeporte} />
          <Stack.Screen name="CanchasXEYD" component={CanchasXEmpresaYDeporte} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
        )
        }