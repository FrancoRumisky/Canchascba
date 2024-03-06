import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "../StackNavigator/StackNavigator";
import Contacto from "../../Components/screens/Contacto";
import Perfil from "../../Components/screens/Perfil";
import { Colors } from "../../Components/Styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Appnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home-outline" : "home-sharp";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person-outline" : "person";
          } else {
            iconName = focused ? "call-outline" : "call";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: Colors.red,
        // tabBarInactiveBackgroundColor:"gray",
        // headerStyle: {
        //   backgroundColor: "transparent",
        // },
        tabBarShowLabel: false,
        headerTitle: (props) => (
          <Image
            style={{ width: 80, height: 80 }}
            source={require("../../../assets/Logo.png")}
          />
        ),

        headerBackground: () => (
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/002/082/394/original/abstract-header-with-red-and-black-layers-above-each-other-modern-design-banner-for-your-business-illustration-with-oblique-stripes-and-lines-vector.jpg",
            }}
          />
        ),
        headerTintColor: "#fff",
      })}
    >
      <Tab.Screen name="Inicio" component={StackNavigator} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Contacto" component={Contacto} />
    </Tab.Navigator>
  );
};

export default Appnavigation;
