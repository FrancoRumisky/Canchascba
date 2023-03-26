// Imports React Native
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text } from "react-native";
// Imports Redux
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
// Imports Components
import StackNavigator from "./src/Components/StackNavigator/StackNavigator";
import Contacto from "./src/Components/Contacto/Contacto";
import Perfil from "./src/Components/Perfil/Perfil";
//import Icons
import Ionicons from "@expo/vector-icons/Ionicons";
//import Styles
import { Colors } from "./src/Components/Styles/Colors";

const Tab = createBottomTabNavigator();
const store = configureStore();

function LogoTitle() {
  return (
    <Image
      style={{ width: 80, height: 80 }}
      source={require("./assets/Logo.png")}
    />
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Inicio") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Perfil") {
                iconName = focused ? "ios-person" : "ios-person-outline";
              } else {
                iconName = focused ? "ios-mail-open" : "ios-mail-outline";
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
            headerTitle: (props) => <LogoTitle {...props} />,

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
      </NavigationContainer>
    </Provider>
  );
}
