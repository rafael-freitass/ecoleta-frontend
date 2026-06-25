import { View, Text, FlatList, TouchableOpacity } from "react-native";
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
          Administrar Pontos de Coleta
        </Text>
        <TouchableOpacity style={style.newButton} onPress={() => {router.push("/admin/criar");}}>
          <Text style={style.newButtonText}>
            + Novo ponto
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.table}>
        <FlatList data={pontos} keyExtractor={(item) => item.id.toString()}
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
                <TouchableOpacity style={style.editButton}
                  onPress={() => router.push({
                      pathname: "/admin/editar",
                      params: {
                        id: item.id.toString()
                      }
                    })
                  }
                >
                  <Text style={style.buttonText}>
                    Editar
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.deleteButton} onPress={() => excluir(item.id)} >
                  <Text style={style.deleteText}>
                    Excluir
                  </Text>
                </TouchableOpacity> 
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}