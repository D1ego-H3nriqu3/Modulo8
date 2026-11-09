import mongoose from "../conexao.js";
import Item from "./Item.js";

let itens = []

itens.push(await Item.create({
    nome: "Arroz",
    preco: 25,
    quantidade: 3
}))

itens.push(await Item.create({
    nome: "Café",
    preco: 18,
    quantidade: 2
}))

itens.push(await Item.create({
    nome: "Feijão",
    preco: 8,
    quantidade: 5
}))

itens.forEach((Item) => {
    console.log(`Salvo: ${Item.nome} - (ID: ${Item._id})`)
})

await mongoose.disconnect()