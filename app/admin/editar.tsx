import { View } from "react-native";
import { router,useLocalSearchParams } from "expo-router";

import { useEffect,useState } from "react";


import PontoForm from "app/admin/components/AdminPontoForm/PontoForm";


import {
 buscarPontoPorId,
 atualizarPonto,
 Ponto
} from "../../src/api/pontoColeta/pontoColeta";


import { style } from "./style";



export default function Editar(){


const {id} = useLocalSearchParams();

const [ponto,setPonto]=useState<Ponto>();



async function carregar(){

 const dados =
 await buscarPontoPorId(Number(id));

 setPonto(dados);

}



async function salvar(dados:any){

 await atualizarPonto(
  Number(id),
  dados
 );

 router.back();

}



useEffect(()=>{

 carregar();

},[])



if(!ponto) return null;



return (

<View style={style.container}>


<PontoForm

 ponto={ponto}

 onSubmit={salvar}

/>


</View>

)


}