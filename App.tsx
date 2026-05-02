import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import CadastrarClienteScreen from './src/screens/CadastrarClienteScreen';

export default function App() {
  return (
    <CadastrarClienteScreen></CadastrarClienteScreen>
  )
}