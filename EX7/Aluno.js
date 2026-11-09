import mongoose from "mongoose";

let aluno = new mongoose.Schema({
    nome: {type: String},
    nota1: {type: Number},
    nota2: {type: Number}
})

const Aluno = mongoose.model("Alunos", aluno)

export default Aluno