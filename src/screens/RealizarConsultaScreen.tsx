import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../components/Header";

import { styles } from "../styles/RealizarConsultaStyles";

export default function RealizerConsultaScreen() {
    const [laudo, setLaudo] = useState("")
    const [receita, setReceita] = useState("")

    const historico = [
        "10/03/2026 - Dor de cabeça frequente",
        "22/01/2026 - Check-up geral",
        "15/11/2025 - Gripe"
    ]

    return (
    <View style={{ flex: 1 }}>
      <Header titulo="REALIZAÇÃO DA CONSULTA" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardPaciente}>
          <Text style={styles.nome}>Maria Arnaldo Oliveira</Text>

          <Text style={styles.idade}>23 anos</Text>

          <View style={styles.linha}>
            <Text>04/05/2026</Text>
            <Text>07:40</Text>
          </View>

          <View style={styles.linha}>
            <Text>Dr. Matusalém Gomes</Text>
            <Text>Cardiologista</Text>
          </View>
        </View>

        <Text style={styles.tituloSecao}>Histórico do paciente</Text>

        <View style={styles.cardHistorico}>
          {historico.map((item, index) => (
            <View key={index} style={styles.itemHistorico}>
              <Text style={styles.bolinha}>•</Text>
              <Text style={styles.textoHistorico}>{item}</Text>
            </View>
          ))}

          <TouchableOpacity>
            <Text style={styles.verMais}>Ver mais histórico</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Laudo*</Text>

        <TextInput
          style={styles.textArea}
          multiline
          placeholder="Descreva o diagnóstico do paciente..."
          value={laudo}
          onChangeText={setLaudo}
        />

        <Text style={styles.label}>Receita*</Text>

        <TextInput
          style={styles.textArea}
          multiline
          placeholder="Digite a receita do paciente..."
          value={receita}
          onChangeText={setReceita}
        />

        <TouchableOpacity style={styles.botaoSalvar}>
          <Text style={styles.textoBotao}>SALVAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoEncerrar}>
          <Text style={styles.textoBotao}>ENCERRAR CONSULTA</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}