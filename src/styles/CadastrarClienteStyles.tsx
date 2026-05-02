import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#D9D9D9", //Meu expo bugou e n ta mudando nada, voltar aqui e arrumar, tem chance de dar ruim KKKK. Mas é para ser o fundo do local de adicionar valor.
    padding: 8,
    borderRadius: 4,
  },
  linha: {
    flexDirection: "row",
  },
  botaoLimpar: {
    backgroundColor: "#FF0000",
    padding: 10,
    marginTop: 20,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  botaoCadastrar: {
    backgroundColor: "#3DDE55",
    padding: 15,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
    width: "50%",
    alignSelf: 'center'
  },
  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
  },
  textoCadastrar: {
    color: "#000",
    fontWeight: "bold",
  },
});