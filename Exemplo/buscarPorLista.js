import mongoose from "../conexao.js";
import Produto from "./produto.js";

let produtos = await Produto.find()

let posicao = 1

if(posicao >= produtos.length){
    console.log("Não existe produto nessa posição")
}else{
    let id = produtos[posicao]._id

    let produto = await Produto.findById(id)
    console.log(`\n${produto.nome}: R$ ${produto.preco} | Estoque ${produto.estoque} | ${produto.categoria}\n`)
}

await mongoose.disconnect()