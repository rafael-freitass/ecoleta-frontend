import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/products";
import { useProduct } from "@/context/ProductContext";
import { style } from "./style";

export default function SelecionarLixo() {
  const { selectedProduct, setSelectedProduct } = useProduct();

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={style.title}>Selecione o produto</Text>
      <Text style={style.subtitle}>
        Escolha o item que você quer descartar
      </Text>

      <View style={style.divider} />

      {products.map((category) => (
        <View key={category.category} style={style.categoryContainer}>
          <Text style={style.categoryTitle}>
            {category.category}
          </Text>

          <View style={style.grid}>
            {category.items.map((item) => (
              <ProductCard
                key={item.id}
                label={item.label}
                icon={item.icon}
                selected={selectedProduct?.id === item.id}
                onPress={() => setSelectedProduct({id: item.id, label: item.label })}
              />
            ))}
          </View>
        </View>
      ))}

      <View style={style.footerSpacing} />
    </ScrollView>
  );
}