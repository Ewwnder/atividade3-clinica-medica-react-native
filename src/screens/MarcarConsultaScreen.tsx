import React, { useState } from "react";
import { TouchableOpacity, View, Text, ScrollView, Alert } from "react-native";

import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import ClientInfos from "../components/ClientInfos";
import { ClienteInfo } from "../interfaces/ClienteInfo";
import SelectMedico from "../components/SelectMedico";
import SelectEspecialidade from "../components/SelectEspecialidade";
import { styles } from "../styles/MarcarConsultaStyles";
import { Calendar } from "react-native-calendars";
import Calendario from "../components/Calendario";

export default function MarcarConsultaScreen() {
  const navigation = useNavigation();

  const [aberto, setAberto] = useState(false);
  const [cliente, setClient] = useState<ClienteInfo | null>(null);
  const [retorno, setRetorno] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState<number | null>(
    null,
  );

  const clienteMock = {
    nome: "Gabriel Pedro Toalhim",
    dataNascimento: new Date("2000-02-29"),
    email: "gabrielxinzhao@gmail.com",
    telefone: "(11) 99999-0000",
    logradouro: "Rua das Aristidenses",
    bairro: "Centro",
    estado: "SP",
    cidade: "Salto",
  };

  const medicos = [{ title: "Genivan Marcos - CRM00000/SP" }];

  const especialidades = [{ title: "Oftalmologia" }];

  const horarios = [
    { hora: "07h30 - 08h20", status: "LIVRE" },
    { hora: "08h30 - 09h20", status: "LIVRE" },
    { hora: "09h30 - 10h20", status: "LIVRE" },
    { hora: "10h30 - 11h20", status: "CANCELADO" },
  ];

  const [data, setDataSelecionada] = useState("");

  return (
    <ScrollView style={{ padding: 10 }}>
      <Header titulo="AGENDAMENTO DE CONSULTAS" />

      <Text style={styles.titulo}>Selecionar cliente</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("ListarCliente" as never)}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 5,
        }}
      >
        <Text>{cliente ? cliente.nome : "Cliente selecionado"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setAberto(!aberto)}>
        <Text style={styles.titulo}>
          Informações do cliente {aberto ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {aberto && (
        <View style={{ marginTop: 10 }}>
          <ClientInfos cliente={clienteMock} />
        </View>
      )}

      <Text style={styles.titulo}>Selecione o médico:</Text>

      <SelectMedico data={medicos} onSelect={(medico) => console.log(medico)} />

      <Text style={styles.titulo}>Selecione a especialidade:</Text>

      <SelectEspecialidade
        data={especialidades}
        onSelect={(esp) => console.log(esp)}
      />

      <Text style={styles.titulo}>Escolha um dia para a consulta</Text>
      <Calendario onSelectDate={setDataSelecionada}></Calendario>
      <Text>Dia selecionado: {data}</Text>

      <Text style={styles.titulo}>Horários disponíveis:</Text>

      <View style={{ borderWidth: 1, marginTop: 10 }}>
        {horarios.map((h, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setHorarioSelecionado(index)}
            style={[
              styles.listagemHoras,
              {
                backgroundColor: horarioSelecionado === index ? "#ddd" : "#fff",
              },
            ]}
          >
            <Text>{h.hora}</Text>

            <Text
              style={[
                styles.statusHora,
                {
                  backgroundColor: h.status === "LIVRE" ? "green" : "orange",
                },
              ]}
            >
              {h.status === "LIVRE" ? "L - LIVRE" : "C - CANCELADO"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.retorno}>
        <Text>Consulta de retorno?</Text>
        <TouchableOpacity
          style={[styles.radioButton, retorno && { backgroundColor: "red" }]}
          onPress={() => setRetorno(true)}
        >
          <Text
            style={{
              fontWeight: retorno ? "bold" : "regular",
            }}
          >
            Sim
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.radioButton, !retorno && { backgroundColor: "red" }]}
          onPress={() => setRetorno(false)}
        >
          <Text style={{ fontWeight: !retorno ? "bold" : "regular" }}>Não</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ListarConsultas" as never)}
        style={styles.botaoMarcar}
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          AGENDAR CONSULTA
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
