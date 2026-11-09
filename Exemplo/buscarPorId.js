import mongoose from "../conexao.js";
import Produto from "./produto.js";

let id = "6ae9d1a93b290c238784d699"

let produto = await Produto.findById(id)

if(produto === null){
    console.log("Produto não encontrado!")
}else{
    console.log(`\n${produto.nome}: R$ ${produto.preco} | Estoque ${produto.estoque} | ${produto.categoria}\n`)
}

await mongoose.disconnect()