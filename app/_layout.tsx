import { View } from "react-native";
import { Slot } from "expo-router";
import { style } from "./style"
import { ProductProvider, useProduct } from "@/context/ProductContext";

import Header from "@/components/Header";
import SelecionadoHeader from "@/components/ProdutoSelecionadoHeader";
import Footer from "@/components/Footer";

function LayoutContent() {
  const { selectedProduct } = useProduct();

  return (
    <View style={style.container}>
      {selectedProduct ? (
        <SelecionadoHeader 
          produto={selectedProduct.label} 
          pontos={6}
        />
      ) : (
        <Header />
      )}

      <View style={style.content}>
        <Slot />
      </View>

      <Footer />
    </View>
  );
}

export default function Layout() {
  return (
    <ProductProvider>
      <LayoutContent />
    </ProductProvider>
  );
}