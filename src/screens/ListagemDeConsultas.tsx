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
    { medico: "Ana", paciente: "Jessica", horario: horarios[0].hora },
    { medico: "Bia", paciente: "Pedro", horario: horarios[2].hora },
    { medico: "Caio", paciente: "Maria", horario: horarios[1].hora },
  ];

  return (
    <View>
      <Header titulo="Listagem de Consultas"></Header>
      <Text>
        Visualizando as consultas agendadas para o dia{" "}
        <Text style={{ fontWeight: "bold" }}>
          {new Date().toLocaleString("pt-BR").slice(0, 10)}
        </Text>
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

      <View style={{ borderWidth: 1, margin: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Horário da Consulta</Text>
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
        <Button title="Aplicar filtros"></Button>
      </View>

      <View style={{ marginVertical: 20 }}>
        <FlatList
          style={{
            borderWidth: 1,
            marginHorizontal: 5,
            borderRadius: 8,
            padding: 6,
          }}
          data={consultas}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ width: 30, fontWeight: "bold" }}></Text>
              <Text style={{ flex: 1, fontWeight: "bold" }}>Médico</Text>
              <Text style={{ flex: 1, fontWeight: "bold" }}>Paciente</Text>
              <Text style={{ flex: 1, fontWeight: "bold" }}>Horário</Text>
            </View>
          )}
          renderItem={({ item, index }) => {
            const selecionado = consultasSelecionadas.includes(index);
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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

      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: "bold" }}>
          OBS: Ao confirmar uma consulta de horário posterior para o mesmo
          médico, as consultas em horários anteriores não confirmadas serão
          canceladas
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            CONFIRMAR CONSULTAS SELECIONADAS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            CANCELAR CONSULTAS SELECIONADAS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
