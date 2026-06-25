import React, { createContext, useState, useContext } from 'react';

type Product = {
  id: string;
  label: string;
  tipo: string;
};

type ProductContextType = {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;

  quantidadePontos: number;
  setQuantidadePontos: (quantidade: number) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantidadePontos, setQuantidadePontos] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        quantidadePontos,
        setQuantidadePontos
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProduct deve ser usado dentro de um ProductProvider"
    );
  }

  return context;
};