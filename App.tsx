import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import CadastrarClienteScreen from "./src/screens/CadastrarClienteScreen";
import MarcarConsultaScreen from "./src/screens/MarcarConsultaScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListagemDeConsultas from "./src/screens/ListagemDeConsultas";
import ListarClienteScreen from "./src/screens/ListarClienteScreen";
import EncerrarConsultaScreen from "./src/screens/EncerrarConsultaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MarcarConsulta" component={MarcarConsultaScreen} />
        <Stack.Screen name="ListarCliente" component={CadastrarClienteScreen} />
        <Stack.Screen
          name="ListarConsultas"
          component={ListagemDeConsultas}
        ></Stack.Screen>
        <Stack.Screen name="ListarCliente" component={ListarClienteScreen} />
        <Stack.Screen name="CadastrarCliente" component={CadastrarClienteScreen} />
        <Stack.Screen name="EncerrarConsulta" component={EncerrarConsultaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
