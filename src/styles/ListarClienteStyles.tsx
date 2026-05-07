import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#E6E6E6",
    flex: 1,
  },

  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },

  botaoCadastrar: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  textoCadastrar: {
    fontWeight: "bold",
  },

  inputBusca: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#DDD",
    padding: 12,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 10,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nome: {
    fontWeight: "bold",
  },

  detalhes: {
    marginTop: 10,
  },
});