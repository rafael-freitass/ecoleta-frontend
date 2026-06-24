import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { style } from "./style";

export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function entrar() {
    if (usuario === "admin" && senha === "admin") {
      setErro("");
      router.replace("/admin/painel");
      return;
    }

    setErro("Usuário ou senha incorretos");
  }

  return (
    <View style={style.container}>
      <View style={style.loginCard}>

        <Text style={style.loginTitle}>
          Área administrativa
        </Text>

        <Text style={style.loginSubtitle}>
          Gerencie os pontos de coleta
        </Text>


        <TextInput
          style={style.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />


        <TextInput
          style={style.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />


        <View style={style.button}>
          <Button
            title="Entrar"
            onPress={entrar}
          />
        </View>


        {erro ? (
          <Text style={style.error}>
            {erro}
          </Text>
        ) : null}


      </View>
    </View>
  );
}