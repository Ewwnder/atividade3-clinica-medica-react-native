import { View, Text } from "react-native";

import { styles } from "../styles/HeaderStyles"

//Criando um Prop, porque preciso definir a qual tipo o titulo pertence
export default function Header({ titulo }: { titulo: string}) { //Isso aqui é para permitir alterar o nome da página atual, depois será substituido para adicionar o navigation.
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text> {/*Preciso ainda adicionar a função de voltar para a tela anterior, decidir se vai para home ou para tela anterior*/}
        </View>
    )
}