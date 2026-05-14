import { View, Text } from "react-native";
import { styles } from "./style";

export default function SelecionadoHeader(props:any) {
  return (
    <View style={styles.background}>
      <View style={styles.conteudo}>
        <Text style={styles.produtoSelecionado}>Produto Selecionado</Text>
        <Text style={styles.produto}>{props.produto}</Text>
        <Text style={styles.pontos}>{props.pontos} Disponíveis</Text>
      </View>
    </View>
  );
}