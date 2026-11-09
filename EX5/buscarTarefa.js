import mongoose from "../conexao.js";
import Tarefa from "./Tarefas.js";

let id = "6ae9e98b1a6cdc2bfa45dabc"

let tarefa = await Tarefa.findById(id)

if(tarefa === null){
    console.log("Não foi possível encontrar esta tarefa!")
}else{
    if(tarefa.concluida === true){
        console.log(`${tarefa.titulo}: Concluida`)
    }else{
        console.log(`${tarefa.titulo}: Pendente`)
    }
    
}

await mongoose.disconnect()