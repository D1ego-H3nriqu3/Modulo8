import mongoose from "../conexao.js";
import Filme from "./Filme.js";
// Complete: consiga o _id do Matrix,
let id = '6ae9d986aa8821e9aa5bff2f'

let filme = await Filme.findById(id)

if(filme === null){
    console.log("Filme não encontrado!")
}else{
    console.log(`${filme.titulo} (${filme.genero}) ${filme.duracao} min`)
}

await mongoose.disconnect();