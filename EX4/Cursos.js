import mongoose from "mongoose";

let curso = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório!"],
        trim: true
    },
    cargaHoraria: {
        type: Number,
        required: [true, "A carga horária é obrigatória!"],
        min: [1, "Precisa no mínimo de uma carga Horária de 1 hora"]
    },
    vagas: {
        type: Number,
        required: [true, "As vagas são obrigatórias!"],
        min: [1, "Precisa no mínimo de uma vaga!"]
    }
})

const Curso = mongoose.model("Cursos", curso)

export default Curso

