import { View, Text, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";

import { buscarTodosPontos, removerPonto, Ponto } from "../../src/api/pontoColeta/pontoColeta";
import { style } from "./style";

export default function Painel() {
  const [pontos, setPontos] = useState<Ponto[]>([]);

  async function carregar() {
    const dados = await buscarTodosPontos();
    setPontos(dados);
  }

  async function excluir(id:number) {
    await removerPonto(id);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={style.painel}>
      <View style={style.painelHeader}>
        <Text style={style.painelTitle}>
          Pontos de coleta
        </Text>
        <Button
          title="Novo ponto"
          onPress={() => {router.push("/admin/criar");}}
        />
      </View>
      <View style={style.table}>
        <FlatList
          data={pontos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={style.row}>
              <View>
                <Text style={style.name}>
                  {item.nome}
                </Text>
                <Text style={style.info}>
                  {item.endereco}
                </Text>
                <Text style={style.info}>
                  {item.tipo_ponto}
                </Text>
              </View>
              <View style={style.actions}>
                <Button
                  title="Editar"
                  onPress={() => {}}
                />
                <Button
                  title="Excluir"
                  onPress={() => excluir(item.id)}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}