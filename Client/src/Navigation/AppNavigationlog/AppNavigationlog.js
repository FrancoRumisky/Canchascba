
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer} from "@react-navigation/native"
import SplashScreen from "../../Components/screens/SplashScreen"
import Login from "../../Components/screens/Login"
import AppNavigation from "../Appnavigation/Appnavigation"

const Stack = createStackNavigator();

export default function AppNavigationLog() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={AppNavigation} />
    </Stack.Navigator>
  );
}
