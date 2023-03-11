import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from "./src/redux/store"
import Home from "./src/Components/Home/Home"
import Home1 from "./src/Components/Home1/Home1"
import Home3 from "./src/Components/Home3/Home3"

const Stack = createStackNavigator();
const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          /> 
          <Stack.Screen
            name="Home1"
            component={Home1}
          /> 
          <Stack.Screen
            name="Home3"
            component={Home3}
          /> 
        </Stack.Navigator> 
      </NavigationContainer>
      </Provider>
  );
}