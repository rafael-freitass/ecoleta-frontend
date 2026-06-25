import { View } from "react-native";
import { Slot } from "expo-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { style } from "./style";
import { useProduct } from "@/context/ProductContext";
import SelecionadoHeader from "@/components/ProdutoSelecionadoHeader";

export default function AppLayout(){
    const { selectedProduct, quantidadePontos } = useProduct();

    return (
        <View style={style.container}>
            { selectedProduct ? 
              <SelecionadoHeader produto={selectedProduct.label} pontos={quantidadePontos} /> : 
              <Header />
            }
            <View style={style.content}>
                <Slot />
            </View>
            
            <Footer />
        </View>
    )
}