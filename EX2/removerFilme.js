import mongoose from "../conexao.js";
import Filme from "./Filme.js";

let id = '6aeb278e62c5860b3fcfb17e'

let remover = await Filme.findByIdAndDelete(id)

if(remover === null){
    console.log("Não foi encontrado o filme")
}else{
    console.log("Filme removido:", remover.titulo)
}
await mongoose.disconnect();