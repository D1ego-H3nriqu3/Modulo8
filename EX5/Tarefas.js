import mongoose from "mongoose"

let tarefa = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O titulo é obrigatório!"],
        trim: true,
    },
    concluida: {
        type: Boolean,
        required: [true, "O status é obrigatório!"],
        trim: true,
        enum: {
            values: [true, false],
            message: "{VALUE} não é um status!"
        },
        default: false
    }
})

const Tarefa = mongoose.model("Tarefas", tarefa)

export default Tarefa