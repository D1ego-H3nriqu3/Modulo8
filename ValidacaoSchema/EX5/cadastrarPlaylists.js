import mongoose from "../../conexao.js";
import Playlist from "./Playlist.js";

await Playlist.create({
    nome: "Para estudar",

    musicas: [
    {
        titulo: "Clair de Lune",
        artista: "Debussy",
        duracao: 5
    },
    {
        titulo: "Gymnopédie",
        artista: "Satie",
        duracao: 3
    },
    {
        titulo: "Nocturne",
        artista: "Chopin",
        duracao: 4
    }
    ]
})

await Playlist.create({
    nome: "Treino",

    musicas: [
    {
        titulo: "Eye of the Tiger",
        artista: "Survivor",
        duracao: 4
    },
    {
        titulo: "Stronger",
        artista: "Kanye West",
        duracao: 5
    }
    ]
})

await mongoose.disconnect()