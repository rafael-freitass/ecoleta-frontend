import { View } from "react-native";
import { router } from "expo-router";

import PontoForm from "app/admin/components/AdminPontoForm/PontoForm";

import {
 criarPonto
} from "../../src/api/pontoColeta/pontoColeta";


import { style } from "./style";


export default function Criar(){


async function salvar(dados:any){

 await criarPonto(dados);

 router.back();

}


return (

<View style={style.container}>

<PontoForm
 onSubmit={salvar}
/>

</View>

)

}