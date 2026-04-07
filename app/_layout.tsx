import { View } from "react-native";
import { Slot } from "expo-router";
import { styles } from "./styles"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Slot />
      </View>

      <Footer />
    </View>
  );
}

