import mongoose from "../conexao.js";
import Filme from "./Filme.js";
// Complete: busque todos os filmes,
let filmes = await Filme.find()
// mostre o total e depois cada filme com um for
console.log("\nTotal de filmes:", filmes.length)

filmes.forEach((filme) => {
    console.log(`ID: ${filme._id} - ${filme.titulo} (${filme.genero}) ${filme.duracao} min`)
})

await mongoose.disconnect();