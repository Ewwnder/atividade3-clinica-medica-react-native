import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";

import MarcarConsultaScreen from "./src/screens/MarcarConsultaScreen";
import CadastrarClienteScreen from "./src/screens/CadastrarClienteScreen";
import ListagemDeConsultas from "./src/screens/ListagemDeConsultas";
import ListarClienteScreen from "./src/screens/ListarClienteScreen";
import EncerrarConsultaScreen from "./src/screens/EncerrarConsultaScreen";
import RealizerConsultaScreen from "./src/screens/RealizarConsultaScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MarcarConsulta"
          component={MarcarConsultaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CadastrarCliente"
          component={CadastrarClienteScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListarConsultas"
          component={ListagemDeConsultas}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListarCliente"
          component={ListarClienteScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EncerrarConsulta"
          component={EncerrarConsultaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RealizarConsulta"
          component={RealizerConsultaScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}