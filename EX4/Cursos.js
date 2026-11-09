import mongoose from "mongoose";

let curso = new mongoose.Schema({
    nome: {type: String},
    cargaHoraria: {type: Number},
    vagas: {type: Number}
})

const Curso = mongoose.model("Cursos", curso)

export default Curso

