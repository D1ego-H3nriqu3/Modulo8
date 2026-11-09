import mongoose from "../conexao.js";
import Livro from "./livros.js";
// Complete: consiga o _id do Iracema
let livros = await Livro.find()

let posicao = 1

if(posicao >= livros.length){
    console.log("Posição não encontrada!")
}else{
    let id = livros[posicao]._id
    let livro = await Livro.findById(id)
    console.log(`- ${livro.titulo}, de ${livro.autor} (${livro.ano})`)
}
// (copiado do listar ou pela posição na lista),
// busque com o findById e mostre título, autor e ano.
// Trate o caso de não encontrar.
await mongoose.disconnect();