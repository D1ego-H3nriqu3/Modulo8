import mongoose from "mongoose";

let turma = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O curso é obrigatório"],
        trim: true
    },
    vagas: {
        type: Number,
        min: [1, "A turma precisa de pelo menos 1 vaga"],
        default: 20
    },

    professor: {
        nome: {
            type: String,
            required: [true, "Informe o professor!"],
            trim: true
        }
    }
})

let Turma = mongoose.model("Turma", turma)

export default Turma