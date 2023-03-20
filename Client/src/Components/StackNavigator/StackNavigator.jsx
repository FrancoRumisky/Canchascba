// Imports React Native
import { createStackNavigator } from "@react-navigation/stack";
import { Image,View,Text } from "react-native";
// Imports Components
import Home from "../Home/Home";
import Home1 from "../Home1/Home1";
import Home3 from "../Home3/Home3";

const Stack = createStackNavigator();


export default function StackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Home1" component={Home1} />
          <Stack.Screen name="Home3" component={Home3} />
        </Stack.Navigator>
        )
        }