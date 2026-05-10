import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { styles } from "../styles/LoginStyles";
import Header from "../components/Header";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Header titulo="Login" />

      <View style={styles.container}>
        <View style={styles.card}>
          
          <Text style={styles.titulo}>
            Trabalho Prático
          </Text>

          <Text style={styles.subtitulo}>
            Érica, Lucas Alves e Nicolas Aparecido
          </Text>

          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            placeholder="email@clinica.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>

          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity>
            <Text style={styles.esqueciSenha}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textoBotao}>
              ENTRAR
            </Text>
          </TouchableOpacity>

          <Text style={styles.mockup}>
            * Tela sem funcionamento por ser optativa e se tratar de um MOCK, iremos implementar em um futuro.
          </Text>
        </View>
      </View>
    </View>
  );
}