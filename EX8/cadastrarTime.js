import mongoose from "../conexao.js";
import Time from "./Time.js";

await Time.create({
    nome: "Leões",
    vitorias: 5,
    empates: 2,
    derrotas: 1
})

await Time.create({
    nome: "Tigres",
    vitorias: 4,
    empates: 4,
    derrotas: 0
})

await Time.create({
    nome: "Águias",
    vitorias: 6,
    empates: 0,
    derrotas: 2
})

await Time.create({
    nome: "Lobos",
    vitorias: 2,
    empates: 3,
    derrotas: 3
})

await mongoose.disconnect()