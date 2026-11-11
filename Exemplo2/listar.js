import mongoose from "../conexao.js";
import Post from "./post.js";

let posts = await Post.find()

posts.forEach((post) => {
    console.log(`\n${post.titulo} | ${post.categoria} | ${post.autor.nome}`)
    //Acessa o array dentro do array | Post --> Comentarios
    post.comentarios.forEach((comentario) => {
        console.log(`\n${comentario.texto} \n ${comentario.curtidas}`)
    })
})

await mongoose.disconnect()