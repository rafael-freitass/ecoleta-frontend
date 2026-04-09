import { View, Text, TouchableOpacity } from "react-native";
import { Recycle, Map, List } from "lucide-react-native";
import { styles } from "./style";

import { useRouter, usePathname } from "expo-router";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const activeColor = "#34CB79";
  const inactiveColor = "#6C6C80";

  return (
    <View style={styles.background}>
      
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => router.push("/")}
      >
        <Recycle
          size={24}
          color={pathname === "/" ? activeColor : inactiveColor}
        />
        <Text style={[styles.title, pathname === "/" && styles.titleActive]}>
          Produtos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => router.push("/mapa")}
      >
        <Map
          size={24}
          color={pathname === "/mapa" ? activeColor : inactiveColor}
        />
        <Text style={[styles.title, pathname === "/mapa" && styles.titleActive]}>
          Mapa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => router.push("/lista")}
      >
        <List
          size={24}
          color={pathname === "/lista" ? activeColor : inactiveColor}
        />
        <Text style={[styles.title, pathname === "/lista" && styles.titleActive]}>
          Lista
        </Text>
      </TouchableOpacity>

    </View>
  );
}