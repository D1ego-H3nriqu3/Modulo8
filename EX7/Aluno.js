import mongoose from "mongoose";

let aluno = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório!"],
        trim: true
    },
    nota1: {
        type: Number,
        required: [true, "A nota é obrigatória!"],
        min: [0, "A nota deve ser maior ou igual a 0"],
        max: [10, "A nota deve ser menor ou igual a 10"],
        default: 0
    },
    nota2: {
        type: Number,
        required: [true, "A nota é obrigatória!"],
        min: [0, "A nota deve ser maior ou igual a 0"],
        max: [10, "A nota deve ser menor ou igual a 10"],
        default: 0
    }
})

const Aluno = mongoose.model("Alunos", aluno)

export default Aluno