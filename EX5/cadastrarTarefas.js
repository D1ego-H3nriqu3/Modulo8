import mongoose from "../conexao.js";
import Tarefa from "./Tarefas.js";

await Tarefa.create({
    titulo: "Estudar Mongoose",
    concluida: true
})

await Tarefa.create({
    titulo: "Fazer a lista",
    concluida: false
})

await Tarefa.create({
    titulo: "Revisar o Express",
    concluida: false
})

await mongoose.disconnect()