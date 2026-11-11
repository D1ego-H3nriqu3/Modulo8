import mongoose from "mongoose";

let playlist = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório!"],
        trim: true
    },

    musicas: [
        {
            titulo: {
                type: String,
                required: [true, "O titulo é obrigatório!"],
                trim: true
            },
            artista: {
                type: String,
                trim: true
            },
            duracao: {
                type: Number,
                min: [1, "A duração mínima é 1 minuto"],
                default: 2
            }
        }
    ]
})

let Playlist = mongoose.model("Playlist", playlist)

export default Playlist