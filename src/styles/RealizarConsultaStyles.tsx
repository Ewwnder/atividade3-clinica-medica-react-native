import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#E6E6E6",
  },

  cardPaciente: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    backgroundColor: "#F5F5F5",
    marginBottom: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  idade: {
    marginBottom: 10,
    fontSize: 16,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  tituloSecao: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
  },

  cardHistorico: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#F5F5F5",
    padding: 10,
    marginBottom: 20,
  },

  itemHistorico: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  bolinha: {
    color: "#00AEEF",
    fontSize: 18,
    marginRight: 10,
  },

  textoHistorico: {
    fontSize: 16,
  },

  verMais: {
    color: "green",
    marginTop: 5,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#FFF",
    height: 110,
    textAlignVertical: "top",
    padding: 10,
    marginBottom: 20,
  },

  botaoSalvar: {
    backgroundColor: "#2E8B00",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },

  botaoEncerrar: {
    backgroundColor: "#C00000",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});