import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { styles } from "../styles/HomeStyles";

export default function HomeScreen({ navigation }: any) {
  const menus = [
    {
      titulo: "Login",
      rota: "Login"
    },
    {
      titulo: "Cadastrar Cliente",
      rota: "CadastrarCliente",
    },
    {
      titulo: "Listar Clientes",
      rota: "ListarCliente",
    },
    {
      titulo: "Marcar Consulta",
      rota: "MarcarConsulta",
    },
    {
      titulo: "Listagem de Consultas",
      rota: "ListarConsultas",
    },
    {
      titulo: "Realizar Consulta",
      rota: "RealizarConsulta",
    },
    {
      titulo: "Encerrar Consulta",
      rota: "EncerrarConsulta",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Agenda Médica (Érica, Lucas Alves e Nicolas Aparecido)</Text>

      <Text style={styles.subtitulo}>
        Escolha uma funcionalidade
      </Text>

      {menus.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(item.rota)}
        >
          <Text style={styles.textoCard}>{item.titulo}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}