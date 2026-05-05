import { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import Header from "../components/Header";

import { styles } from "../styles/EncerrarConsultaStyles";

type Consulta = {
    id: number,
    paciente: string,
    data: string,
    medico: string
}

const formasDePgto = ["Dinheiro", "Cartão", "Pix"]

const procedimentos = [
    "Consulta Geral",
    "Raio-X",
    "Limpeza de Dente",
    "Conversa com psicologo"
]

export default function EncerrarConsultaScreen({ navigation }:any) {
    const [buscar, setBuscar] = useState("")
    const [selecionada, setSelecionada] = useState<Consulta | null>(null);

    const [pagamento, setPagamento] = useState<string | null>(null);

    const [buscarProcedimento, setBuscarProcedimento] = useState("");
    const [procedimentosSelecionados, setProcedimentosSelecionados] = useState<string[]>([]);

    const consultas: Consulta[] = [
        {
            id: 1,
            paciente: "Lady Gaga",
            data: "05/05/2026, 13:52",
            medico: "Ariana Grande, Fonóloga"
        }
    ]

    const consultasFiltradas = consultas.filter((c) =>
    c.paciente.toLowerCase().includes(buscar.toLowerCase())
    )

    const toggleProcedimento = (proc: string) =>{
        if (procedimentosSelecionados.includes(proc)) {
            setProcedimentosSelecionados(procedimentosSelecionados.filter((p) => p!==proc));
        } else{
            setProcedimentosSelecionados([ ...procedimentosSelecionados, proc])
        }
    }

    return (
    <View style={{ flex: 1 }}>
      <Header titulo="Encerrar Consulta" />

      <View style={styles.container}>
        <Text style={styles.subtitulo}>
          Consultas com encerramento pendente
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Buscar por paciente"
          value={buscar}
          onChangeText={setBuscar}
        />

        {!selecionada &&
          consultasFiltradas.map((c) => (
            <TouchableOpacity
              key={c.id}
              style={styles.card}
              onPress={() => setSelecionada(c)}
            >
              <Text style={styles.nome}>{c.paciente}</Text>
              <Text style={styles.info}>
                {c.data} | {c.medico}
              </Text>
            </TouchableOpacity>
          ))}

        {selecionada && (
          <View style={styles.form}>
            <Text style={styles.tituloForm}>
              Encerrando: {selecionada.paciente}
            </Text>

            <Text style={styles.label}>Forma de pagamento:</Text>

            <View style={styles.linha}>
              {formasDePgto.map((fp) => (
                <TouchableOpacity
                  key={fp}
                  style={[
                    styles.checkbox,
                    pagamento === fp && styles.checkboxAtivo,
                  ]}
                  onPress={() => setPagamento(fp)}
                >
                  <Text>{fp}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Procedimentos:</Text>

            <TextInput
              style={styles.input}
              placeholder="Buscar procedimento"
              value={buscarProcedimento}
              onChangeText={setBuscarProcedimento}
            />

            {procedimentos
              .filter((p) =>
                p.toLowerCase().includes(buscarProcedimento.toLowerCase())
              )
              .map((proc) => (
                <TouchableOpacity
                  key={proc}
                  style={[
                    styles.procItem,
                    procedimentosSelecionados.includes(proc) &&
                      styles.procSelecionado,
                  ]}
                  onPress={() => toggleProcedimento(proc)}
                >
                  <Text>{proc}</Text>
                </TouchableOpacity>
              ))}

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Finalizar Atendimento</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}