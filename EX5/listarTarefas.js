import mongoose from "../conexao.js";
import Tarefa from "./Tarefas.js";

let tarefas = await Tarefa.find()

let pendentes = 0

let numTarefa = 1

tarefas.forEach((tarefa) => {
    if(tarefa.concluida === true){
        console.log(`ID: ${tarefa._id} - ${numTarefa}. [X] ${tarefa.titulo}`)
    }else{
        console.log(`ID: ${tarefa._id} - ${numTarefa}. [ ] ${tarefa.titulo}`)
        pendentes++
    }
    numTarefa++
})

console.log("Tarefas pendentes:", pendentes)