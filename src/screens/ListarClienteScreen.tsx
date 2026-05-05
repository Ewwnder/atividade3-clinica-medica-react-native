import { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import Header from "../components/Header";
import { styles } from "../styles/ListarClienteStyles";

type Cliente = {
    id: number,
    nome: string,
    telefone: string,
    email: string,
    expandido?: boolean
}

export default function ListarClienteScreen({ navigation }:any) {
    const [buscar, setBuscar] = useState("");

    const [clientes, setClientes] = useState<Cliente[]>([
        {
            id: 1,
            nome: "Carlitos Alvarez",
            telefone: "(XX) XXXXX-XXXX",
            email: "carlitos@email.com",
            expandido: false
        }
    ]);

    const toggleExpandir = (id:number) => {
        const novas_infos = clientes.map((c) =>
        c.id === id ? { ...c, expandido: !c.expandido} : c
        );
        setClientes(novas_infos);
    };

    const clientesFiltro = clientes.filter((c) =>
    c.nome.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
    <View style={{ flex: 1 }}>
      <Header titulo="Listar Clientes" />

      <View style={styles.container}>
        <View style={styles.topo}>
          <Text style={styles.titulo}>Clientes Cadastrados</Text>

          <TouchableOpacity
            style={styles.botaoCadastrar}
            onPress={() => navigation.navigate("CadastrarCliente")}
          >
            <Text style={styles.textoCadastrar}>Cadastrar +</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.inputBusca}
          placeholder="Buscar por nome..."
          value={buscar}
          onChangeText={setBuscar}
        />

        {clientesFiltro.map((cliente) => (
          <TouchableOpacity
            key={cliente.id}
            style={styles.card}
            onPress={() => toggleExpandir(cliente.id)}
          >
            <View style={styles.linha}>
              <Text style={styles.nome}>{cliente.nome}</Text>
              <Text>{">"}</Text>
            </View>

            {cliente.expandido && (
              <View style={styles.detalhes}>
                <Text>Telefone: {cliente.telefone}</Text>
                <Text>Email: {cliente.email}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}