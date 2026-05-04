import { Text, View } from "react-native";
import { ClienteInfo } from "../interfaces/ClienteInfo";
import { styles } from "../styles/ClientInfosStyles";

type Props = {
  cliente: ClienteInfo;
};

export default function ClientInfos({ cliente }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.titulo}>Nome: </Text>
        <Text style={styles.content}>{cliente.nome}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.titulo}>Data de Nascimento: </Text>
        <Text style={styles.content}>
          {cliente.dataNascimento.toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.titulo}>Telefone: </Text>
        <Text style={styles.content}>{cliente.telefone}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.titulo}>Endereço: </Text>
        <Text style={styles.content}>
          {cliente.logradouro} - {cliente.cidade}, {cliente.estado}
        </Text>
      </View>
    </View>
  );
}
