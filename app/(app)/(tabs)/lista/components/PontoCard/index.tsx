import { View, Text, TouchableOpacity } from "react-native";
import { Map, MapPin, Phone, Clock} from "lucide-react-native";
import { Ponto } from "@/api/pontoColeta/pontoColeta";
import { style } from "./style";

type Props = {
  ponto: Ponto;
  onPress: () => void;
};

export default function PontoCard({ ponto, onPress }: Props) {
  return (
    <View style={style.card}>
      <Text style={style.nome}>
        {ponto.nome}
      </Text>

      <View style={style.infoContainer}>
        <View style={style.infoRow}>
          <MapPin
            size={18}
            color={"#4b5563"}
          />
          <Text style={style.info}>
            {ponto.endereco}
          </Text>
        </View>

        <View style={style.infoRow}>
          <Phone
            size={18}
            color={"#4b5563"}
          />
          <Text style={style.info}>
            {ponto.telefone}
          </Text>
        </View>

        <View style={style.infoRow}>
          <Clock
            size={18}
            color={"#4b5563"}
          />
          <Text style={style.info}>
            {ponto.horario_funcionamento}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={style.button} onPress={onPress}>
        <Map
          size={18}
          color={"#ffffff"}
        />
        <Text style={style.buttonText}>
          Como chegar
        </Text>
      </TouchableOpacity>
    </View>
  );
}