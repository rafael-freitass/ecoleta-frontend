import api from "../axios/api";

export type Ponto = {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  latitude: number;
  longitude: number;
  horario_funcionamento: string;
  tipo_lixo_coletado: string[];
  tipo_ponto: string;
};

export async function buscarTodosPontos(): Promise<Ponto[]> {
  const response = await api.get<Ponto[]>("/pontos-coleta");

  return response.data;
}

export async function buscarPontoPorId(id: number): Promise<Ponto> {
  const response = await api.get<Ponto>(`/pontos-coleta/${id}`);

  return response.data;
}

export async function criarPonto(ponto: Omit<Ponto,"id">){
  const response = await api.post("/pontos-coleta", ponto);
  
  return response.data;
}

export async function atualizarPonto(id:number, ponto:Omit<Ponto,"id">){
  const response = await api.put(`/pontos-coleta/${id}`, ponto);

  return response.data;
}

export async function removerPonto(id:number){
  const response = await api.delete(`/pontos-coleta/${id}`);

  return response.data;
}