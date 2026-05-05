import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9DFF2",
    height: 60,
  },

  titulo: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  botaoMarcar: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
  },
  listagemHoras: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  statusHora: {
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 10,
  },
  retorno: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
});
