import { Ponto } from "../api/pontoColeta/pontoColeta";

interface IconesConvertidos {
  ecoponto: string;
  parceiro: string;
  loja: string;
}

export function gerarMarcadores(pontos: Ponto[], icones: IconesConvertidos) {
    return pontos.map(ponto => {
        let icone = icones.ecoponto;

        if (ponto.tipo_ponto === "Empresa Parceira") {
            icone = icones.parceiro;
        }
        if (ponto.tipo_ponto === "Loja") {
            icone = icones.loja;
        }
        
        return `
            const icon${ponto.id} = L.icon({ iconUrl:"${icone}", iconSize:[35,35] });
            L.marker([${ponto.latitude}, ${ponto.longitude}], {icon: icon${ponto.id}}).addTo(map).bindPopup(\`
            <b>${ponto.nome}</b><br>
            ${ponto.endereco}<br>
            ${ponto.telefone}<br>
            ${ponto.horario_funcionamento}
            \`);
        `;
    }).join("");
}