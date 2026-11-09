import mongoose from "../conexao.js";
import Item from "./Item.js";

let itens = await Item.find()

let valorTotal = 0

itens.forEach((Item) => {
    let valorProduto = Item.preco * Item.quantidade
    console.log(`- ${Item.nome}: ${Item.quantidade} * R$ ${Item.preco} = R$ ${valorProduto}`)
    valorTotal += valorProduto
})

console.log("Valor total em estoque: R$", valorTotal)