import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: "#CCC",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
    fontSize: 14,
  },

  label: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#AAA",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#F9F9F9",
  },

  esqueciSenha: {
    color: "#0077CC",
    marginTop: 12,
    textAlign: "right",
  },

  botao: {
    backgroundColor: "#2E8B57",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  mockup: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
    fontSize: 12,
  },
});