import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#E6E6E6",
    flex: 1,
  },

  subtitulo: {
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#CFE3F1",
    padding: 10,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 10,
  },

  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },

  info: {
    fontSize: 12,
  },

  form: {
    marginTop: 10,
  },

  tituloForm: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
  },

  linha: {
    flexDirection: "row",
    gap: 10,
  },

  checkbox: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 8,
    borderRadius: 5,
  },

  checkboxAtivo: {
    backgroundColor: "#A5D6A7",
  },

  procItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#999",
    marginTop: 5,
  },

  procSelecionado: {
    backgroundColor: "#A5D6A7",
  },

  botao: {
    backgroundColor: "#4CAF50",
    padding: 12,
    marginTop: 15,
    alignItems: "center",
    borderRadius: 8,
  },

  textoBotao: {
    fontWeight: "bold",
  },
});