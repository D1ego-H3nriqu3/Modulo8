import mongoose from "mongoose"

let tarefa = new mongoose.Schema({
    titulo: {type: String},
    concluida: {type: Boolean}
})

const Tarefa = mongoose.model("Tarefas", tarefa)

export default Tarefa