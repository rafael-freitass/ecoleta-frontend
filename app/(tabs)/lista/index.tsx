import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";

import { useProduct } from "@/context/ProductContext";

import { buscarTodosPontos, buscarPontoPorTipo, Ponto } from "../../../src/api/pontoColeta/pontoColeta";
import PontoCard from "@/components/PontoCard";
import { style } from "./style";

export default function Lista() {
  const [pontos, setPontos] = useState<Ponto[]>([]);
  const { selectedProduct } = useProduct();

  useEffect(() => {
    carregarPontos();
  }, [selectedProduct]);

  async function carregarPontos(){
    let dados:Ponto[];

    if(selectedProduct){
      dados = await buscarPontoPorTipo(selectedProduct.tipo);

    }else{
      dados = await buscarTodosPontos();

    }
    setPontos(dados);
  }

  function abrirMapa(ponto:Ponto){
    const url = `https://www.google.com/maps/dir/?api=1&destination=${ponto.latitude},${ponto.longitude}`;
    Linking.openURL(url);
  }

  return (
    <ScrollView style={style.container} contentContainerStyle={style.content} showsVerticalScrollIndicator={false} >
      {
        pontos.map(ponto => (
            <PontoCard
                key={ponto.id}
                ponto={ponto}
                onPress={() => abrirMapa(ponto)}
            />
        ))
      }
    </ScrollView>
  )
}