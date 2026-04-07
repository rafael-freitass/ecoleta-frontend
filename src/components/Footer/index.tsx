import { View, Text, TouchableOpacity } from "react-native";
import { Recycle, Map, List } from "lucide-react-native";
import { styles } from "./style";

export default function Footer() {
  const activeColor = "#34CB79";
  const inactiveColor = "#6C6C80";

  const activeTab = "Produtos";

  return (
    <View style={styles.background}>
      
      <TouchableOpacity style={styles.tabItem}>
        <Recycle
          size={24}
          color={activeTab === "Produtos" ? activeColor : inactiveColor}
        />
        <Text
          style={[
            styles.title,
            activeTab === "Produtos" && styles.titleActive,
          ]}
        >
          Produtos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Map
          size={24}
          color={activeTab === "Mapa" ? activeColor : inactiveColor}
        />
        <Text
          style={[
            styles.title,
            activeTab === "Mapa" && styles.titleActive,
          ]}
        >
          Mapa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <List
          size={24}
          color={activeTab === "Lista" ? activeColor : inactiveColor}
        />
        <Text
          style={[
            styles.title,
            activeTab === "Lista" && styles.titleActive,
          ]}
        >
          Lista
        </Text>
      </TouchableOpacity>

    </View>
  );
}