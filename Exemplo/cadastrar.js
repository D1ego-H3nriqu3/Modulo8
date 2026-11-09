import mongoose from "../conexao.js";
import Produto from "./produto.js";

let teclado = await Produto.create({
    nome: "Teclado",
    categoria: "Periférico",
    preco: 149.99,
    estoque: 10
})

await Produto.create({
    nome: "Mouse",
    categoria: "Periférico",
    preco: 79.99,
    estoque: 20
})

await Produto.create({
    nome: "Monitor",
    categoria: "Monitores",
    preco: 549.99,
    estoque: 100
})

await mongoose.disconnect()