import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import FilterInput from "../components/FilterInput";
import { useState } from "react";
import { styles } from "../styles/ListagemDeConsultas";
import { Button } from "react-native";
export default function ListagemDeConsultas() {
  function toggleSelecionado(index: number) {
    setSelecionados((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  }

  const [paciente, setPaciente] = useState("");
  const [medico, setMedico] = useState("");
  const [horario, setHorario] = useState<Number | null>(null);
  const [consultasSelecionadas, setSelecionados] = useState<number[]>([]);
  const horarios = [
    { hora: "07h30 - 08h20" },
    { hora: "08h30 - 09h20" },
    { hora: "09h30 - 10h20" },
    { hora: "10h30 - 11h20" },
  ];

  const consultas = [
    { medico: "Ana", paciente: "", horario: "" },
    { medico: "Bia", paciente: "", horario: "" },
    { medico: "Caio", paciente: "", horario: "" },
  ];

  return (
    <View>
      <Header titulo="Listagem de Consultas"></Header>
      <Text>
        Visualizando as consultas agendadas para o dia
        {"" + new Date().toLocaleString("pt-BR")}
      </Text>

      <Text>Filtros</Text>
      <FilterInput
        label="Paciente"
        value={paciente}
        onChange={setPaciente}
      ></FilterInput>
      <FilterInput
        label="Médico"
        value={medico}
        onChange={setMedico}
      ></FilterInput>

      <Text>Horário da Consulta</Text>
      <View style={{ borderWidth: 1, marginTop: 10 }}>
        {horarios.map((h, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setHorario(index)}
            style={[
              styles.listagemHoras,
              {
                backgroundColor: horario === index ? "#ddd" : "#fff",
              },
            ]}
          >
            <Text>{h.hora}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Aplicar filtros"></Button>

      <View>
        <FlatList
          data={consultas}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1 }}></Text>
              <Text style={{ flex: 1 }}>Médico</Text>
              <Text style={{ flex: 1 }}>Paciente</Text>
              <Text style={{ flex: 1 }}>Horário</Text>
            </View>
          )}
          renderItem={({ item, index }) => {
            const selecionado = consultasSelecionadas.includes(index);
            return (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => toggleSelecionado(index)}
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 1,
                    margin: 5,
                    backgroundColor: selecionado ? "green" : "white",
                  }}
                ></TouchableOpacity>
                <Text style={{ flex: 1 }}>{item.medico}</Text>
                <Text style={{ flex: 1 }}>{item.paciente}</Text>
                <Text style={{ flex: 1 }}>{item.horario}</Text>
              </View>
            );
          }}
        />
      </View>
      <Text>
        OBS: Ao confirmar uma consulta de horário posterior para o mesmo médico,
        as consultas em horários anteriores não confirmadas serão canceladas
      </Text>
      <TouchableOpacity>
        <Text>CONFIRMAR CONSULTAS SELECIONADAS</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>CANCELAR CONSULTAS SELECIONADAS</Text>
      </TouchableOpacity>
    </View>
  );
}
