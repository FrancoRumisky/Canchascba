// Imports React Native
import { createStackNavigator } from "@react-navigation/stack";
// Imports Components
import Home from "../../Components/screens/Home";
import Datepicker from "../../Components/screens/DatePicker";
import EmpresasXDeporte from "../../Components/screens/EmpresasXDeporte";
import CanchasXEmpresaYDeporte from "../../Components/screens/CanchasXEmpresa&Deporte";
import Map from "../../Components/screens/Map";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Datepicker" component={Datepicker} />
      <Stack.Screen name="EmpresasXDeporte" component={EmpresasXDeporte} />
      <Stack.Screen name="CanchasXEYD" component={CanchasXEmpresaYDeporte} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}
