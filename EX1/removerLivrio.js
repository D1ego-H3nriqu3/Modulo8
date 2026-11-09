import mongoose from "../conexao.js";
import Livro from "./livros.js";
// Complete: consiga o _id do O Cortiço,
let livros = await Livro.find()

let posicao = -1

if(posicao>=livros.length){
    console.log("Livro não encontrado!")
}else{
    let id = livros[posicao]._id
    let remover = await Livro.findByIdAndDelete(id)
    console.log(`Livro removido: ${remover.titulo}`)
}
// remova com o findByIdAndDelete e mostre
// "Livro removido: " e o título.
// Trate o caso de não encontrar.
await mongoose.disconnect();