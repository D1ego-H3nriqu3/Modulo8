import mongoose from "../conexao.js";
import Produto from "./produto.js";

let id = "6ae9d1a93b290c238784d699"

let removido = await Produto.findByIdAndDelete(id)

if(removido === null){
    console.log("Produto não encontrado")
}else{
    console.log(`Removido: ${removido.nome}`)
}

await mongoose.disconnect()