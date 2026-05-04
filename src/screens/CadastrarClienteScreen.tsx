import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import { styles } from "../styles/CadastrarClienteStyles";

type Formulario = {
  nome: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export default function CadastrarClienteScreen() {
  const [formulario, setFormulario] = useState<Formulario>({
    nome: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const troca = (campo: keyof Formulario, valor: string) => {
    setFormulario({ ...formulario, [campo]: valor });
  };

  const limparCampos = () => {
    setFormulario({
      nome: "",
      dataNascimento: "",
      email: "",
      telefone: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header titulo="Cadastrar Cliente" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Informações Pessoais</Text>

        <Text style={styles.label}>Nome*</Text>
        <TextInput
          style={styles.input}
          value={formulario.nome}
          onChangeText={(v) => troca("nome", v)}
          autoFocus={true}
        />

        <Text style={styles.label}>Data de Nascimento*</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/MM/aaaa"
          value={formulario.dataNascimento}
          onChangeText={(v) => troca("dataNascimento", v)}
        />

        <Text style={styles.label}>Email*</Text>
        <TextInput
          style={styles.input}
          placeholder="email@exemplo.com"
          value={formulario.email}
          onChangeText={(v) => troca("email", v)}
        />

        <Text style={styles.label}>Telefone*</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          value={formulario.telefone}
          onChangeText={(v) => troca("telefone", v)}
        />

        <Text style={styles.label}>Logradouro*</Text>
        <TextInput
          style={styles.input}
          value={formulario.logradouro}
          onChangeText={(v) => troca("logradouro", v)}
        />

        <View style={styles.linha}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Número*</Text>
            <TextInput
              style={styles.input}
              value={formulario.numero}
              onChangeText={(v) => troca("numero", v)}
            />
          </View>

          <View style={{ flex: 2, marginLeft: 10 }}>
            <Text style={styles.label}>Complemento</Text>
            <TextInput
              style={styles.input}
              placeholder="Bloco X Apto XX"
              value={formulario.complemento}
              onChangeText={(v) => troca("complemento", v)}
            />
          </View>
        </View>

        <Text style={styles.label}>Bairro*</Text>
        <TextInput
          style={styles.input}
          value={formulario.bairro}
          onChangeText={(v) => troca("bairro", v)}
        />

        <Text style={styles.label}>Cidade*</Text>
        <TextInput
          style={styles.input}
          value={formulario.cidade}
          onChangeText={(v) => troca("cidade", v)}
        />

        <Text style={styles.label}>Estado*</Text>
        <TextInput
          style={styles.input}
          value={formulario.estado}
          onChangeText={(v) => troca("estado", v)}
        />

        <TouchableOpacity style={styles.botaoLimpar} onPress={limparCampos}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastrar} onPress={limparCampos}>
          <Text style={styles.textoCadastrar}>Cadastrar Cliente</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
