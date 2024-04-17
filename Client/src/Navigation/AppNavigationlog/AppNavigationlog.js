
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer} from "@react-navigation/native"
import SplashScreen from "../../Components/screens/SplashScreen"
import Login from "../../Components/screens/Login"
import AppNavigation from "../Appnavigation/Appnavigation"
import { useSelector } from "react-redux";
import ForgotPassword from "../../Components/screens/ForgotPassword";

const Stack = createStackNavigator();

export default function AppNavigationLog() {
  const useAuth = useSelector((state) => state.userAuth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Object.hasOwn(useAuth, "ok") ? AppNavigation : Login } />
      <Stack.Screen name="Home" component={AppNavigation} />
      <Stack.Screen name="ForgotPass" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
