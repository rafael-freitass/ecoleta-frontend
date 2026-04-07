import { View, Text } from "react-native";
import { Recycle } from "lucide-react-native";
import { styles } from "./style";

export default function Header() {
  return (
    <View style={styles.background}>
      <View style={styles.iconContainer}>
        <Recycle size={45} color="#00A64D" strokeWidth={2} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>E-Coleta</Text>
        <Text style={styles.subtitle}>Descarte consciente de eletrônicos</Text>
      </View>
    </View>
  );
}