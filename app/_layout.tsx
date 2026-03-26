import { View } from "react-native";
import { Slot } from "expo-router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <View>
      <Header />

      <View>
        <Slot />
      </View>

      <Footer />
    </View>
  );
}