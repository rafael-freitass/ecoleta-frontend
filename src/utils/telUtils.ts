export const formatarTelefone = (texto: string) => {
    let numero = texto.replace(/\D/g, "");
    
    if (numero.length > 11) numero = numero.substring(0, 11);

    if (numero.length === 0) return "";
    if (numero.length <= 2) return `(${numero}`;
    if (numero.length <= 6) return `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
    if (numero.length <= 10) return `(${numero.slice(0, 2)}) ${numero.slice(2, 6)}-${numero.slice(6)}`;
    
    return `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`;
  };