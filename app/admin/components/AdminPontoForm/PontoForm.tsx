import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import AdminInput from "../AdminInput/AdminInput";
import { Ponto } from "@/api/pontoColeta/pontoColeta";
import { products } from "@/utils/products";
import { style } from "./style";
import { formatarTelefone } from "@/utils/telUtils";

type Props = {
  ponto?: Ponto;
  onSubmit: (dados: Omit<Ponto, "id">) => void | Promise<void>; 
  loading?: boolean;
};

const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const tiposPonto = [
  { id: "ecoponto", label: "EcoPonto" },
  { id: "parceiro", label: "Parceiro" },
  { id: "loja", label: "Loja" }
];

// --- FUNÇÃO PARA FORMATAR OS DIAS ---
function formatarDias(selecionados: string[]) {
  if (!selecionados || selecionados.length === 0) return "";
  if (selecionados.length === 7) return "Todos os dias";

  // 1. Ordena os dias cronologicamente
  const sorted = [...selecionados].sort((a, b) => dias.indexOf(a) - dias.indexOf(b));

  // 2. Agrupa os dias consecutivos
  const groups: string[][] = [];
  let currentGroup: string[] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const currentIndex = dias.indexOf(sorted[i]);
    const previousIndex = dias.indexOf(sorted[i - 1]);

    if (currentIndex === previousIndex + 1) {
      currentGroup.push(sorted[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [sorted[i]];
    }
  }
  groups.push(currentGroup);

  // 3. Formata os agrupamentos
  const formatados = groups.map(group => {
    if (group.length >= 3) return `${group[0]} a ${group[group.length - 1]}`;
    if (group.length === 2) return `${group[0]} e ${group[1]}`;
    return group[0];
  });

  return formatados.join(", "); // Ex: "Seg a Qua, Sex e Sáb"
}

export default function PontoForm({ ponto, onSubmit, loading = false }: Props) {
  const [nome, setNome] = useState(ponto?.nome ?? "");
  const [endereco, setEndereco] = useState(ponto?.endereco ?? "");
  const [telefone, setTelefone] = useState(ponto?.telefone ?? "");
  
  const [latitude, setLatitude] = useState(ponto?.latitude?.toString() ?? "");
  const [longitude, setLongitude] = useState(ponto?.longitude?.toString() ?? "");

  const [diasSelecionados, setDiasSelecionados] = useState<string[]>(["Seg", "Sex"]);

  const [horaInicio, setHoraInicio] = useState("08");
  const [minutoInicio, setMinutoInicio] = useState("00");
  const [horaFim, setHoraFim] = useState("18");
  const [minutoFim, setMinutoFim] = useState("00");

  const [tipo, setTipo] = useState(ponto?.tipo_ponto ?? "");
  const [lixos, setLixos] = useState<string[]>(ponto?.tipo_lixo_coletado ?? []);

  function selecionarDia(dia: string) {
    setDiasSelecionados(prev =>
      prev.includes(dia) ? prev.filter(item => item !== dia) : [...prev, dia]
    );
  }

  function selecionarLixo(id: string) {
    setLixos(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  }

  function Chip({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void; }) {
    return (
      <TouchableOpacity
        style={[style.chip, selected && style.chipSelected]}
        onPress={onPress}
      >
        <Text style={[style.chipText, selected && style.chipTextSelected]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

  async function salvar() {
    // Aplica a formatação inteligente aqui
    const diasFormatados = formatarDias(diasSelecionados);

    await onSubmit({
      nome,
      endereco,
      telefone,
      latitude: Number(latitude),
      longitude: Number(longitude),
      horario_funcionamento: `${diasFormatados} das ${horaInicio}:${minutoInicio} às ${horaFim}:${minutoFim}`,
      tipo_lixo_coletado: lixos,
      tipo_ponto: tipo
    });

    router.replace("/admin/painel");
  }

  return (
    <ScrollView>
      <View style={style.form}>
        
        <View style={style.header}>
          <TouchableOpacity 
            style={style.backButton} 
            onPress={() => router.replace("/admin/painel")}
          >
            <Text style={style.backButtonText}>{"< Voltar"}</Text>
          </TouchableOpacity>
          
          <Text style={style.formTitle}>
            {ponto ? "Editar ponto" : "Novo ponto"}
          </Text>
        </View>

        <AdminInput placeholder="Nome" value={nome} onChangeText={setNome} />
        <AdminInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
        <AdminInput placeholder="Telefone" value={telefone} onChangeText={(texto) => setTelefone(formatarTelefone(texto))} keyboardType="phone-pad" />

        <View style={style.row}>
          <View style={style.flex}>
            <AdminInput placeholder="Latitude" value={latitude} onChangeText={setLatitude} keyboardType="numeric" />
          </View>
          <View style={style.flex}>
            <AdminInput placeholder="Longitude" value={longitude} onChangeText={setLongitude} keyboardType="numeric" />
          </View>
        </View>

        <Text style={style.label}>Dias funcionando</Text>
        <View style={style.options}>
          {dias.map(dia => (
            <Chip
              key={dia}
              label={dia}
              selected={diasSelecionados.includes(dia)}
              onPress={() => selecionarDia(dia)}
            />
          ))}
        </View>

        <Text style={style.label}>Horário de funcionamento</Text>
        <View style={style.rowCentered}>
          <View style={style.flex}>
            <AdminInput placeholder="HH" value={horaInicio} onChangeText={setHoraInicio} keyboardType="numeric" maxLength={2} />
          </View>
          <Text style={style.timeSeparator}>:</Text>
          <View style={style.flex}>
            <AdminInput placeholder="MM" value={minutoInicio} onChangeText={setMinutoInicio} keyboardType="numeric" maxLength={2} />
          </View>
          
          <Text style={style.timeText}>às</Text>
          
          <View style={style.flex}>
            <AdminInput placeholder="HH" value={horaFim} onChangeText={setHoraFim} keyboardType="numeric" maxLength={2} />
          </View>
          <Text style={style.timeSeparator}>:</Text>
          <View style={style.flex}>
            <AdminInput placeholder="MM" value={minutoFim} onChangeText={setMinutoFim} keyboardType="numeric" maxLength={2} />
          </View>
        </View>

        <Text style={style.label}>Tipo do ponto</Text>
        <View style={style.options}>
          {tiposPonto.map(item => (
            <Chip
              key={item.id}
              label={item.label}
              selected={tipo === item.id}
              onPress={() => setTipo(item.id)}
            />
          ))}
        </View>

        <Text style={style.label}>Tipos de lixo coletado</Text>
        <View style={style.options}>
          {products.flatMap(cat => cat.items).map(item => (
            <Chip
              key={item.id}
              label={item.label}
              selected={lixos.includes(item.id)}
              onPress={() => selecionarLixo(item.id)}
            />
          ))}
        </View>

        <TouchableOpacity style={style.saveButton} onPress={salvar}>
          <Text style={style.saveText}>
            {loading ? "Criando..." : "Criar"}
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}