import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/HeaderStyles";

export default function Header({ titulo }: { titulo: string }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate("Home" as never)}
      >
        <Text style={styles.seta}>←</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}