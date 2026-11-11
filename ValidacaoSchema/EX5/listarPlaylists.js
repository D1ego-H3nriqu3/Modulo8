import mongoose from "../../conexao.js";
import Playlist from "./Playlist.js";

let playlists = await Playlist.find()

let duracaoTotal = 0

playlists.forEach((playlist) => {
    console.log(`${playlist.nome} - (${playlist.musicas.length} músicas)`)
    playlist.musicas.forEach((musica) => {
        console.log(` - ${musica.titulo}, de ${musica.artista}`)
        duracaoTotal += musica.duracao
    })
    console.log("Duração total:", duracaoTotal)
})

await mongoose.disconnect()