import mongoose from "../conexao.js";
import Post from "./post.js";

let post = await Post.create({
    titulo: "                                       Aula MongoDB                                               ",
    autor: {
        nome: "Valdir"
    },
    comentarios: [
        {
            texto: "Aula muito boa!!!",
            curtidas: 5
        },
        {
            texto: "Não gostei da aula m :( :( :("
        }
    ]
})

console.log("Post salvo! -", post.titulo)

await mongoose.disconnect()