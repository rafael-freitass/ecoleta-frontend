import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: "#00a64d", // Verde escuro de fundo
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    conteudo: {
        backgroundColor: "#00d05a", // Verde um pouco mais claro que o fundo
        borderRadius: 16,           // Bordas arredondadas do card
        padding: 24,                // Espaçamento interno do card
    },
    produtoSelecionado: {
        color: "#FFFFFF",
        fontSize: 14,
        marginBottom: 8,
    },
    produto: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",         // Deixa o "Smartphone" em negrito
        marginBottom: 16,
    },
    pontos: {
        color: "#FFFFFF",
        fontSize: 14,
    },
});