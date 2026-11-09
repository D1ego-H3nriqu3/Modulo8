import mongoose from "../conexao.js";
import Tarefa from "./Tarefas.js";

let id = "6ae9e98b1a6cdc2bfa45dabb"

let tarefa = await Tarefa.findById(id)

if(tarefa === null){
    console.log("Não foi possível encontrar esta tarefa!")
}else{
    if(tarefa.concluida === true){
        let remover = await Tarefa.findByIdAndDelete(id)
        console.log("Tarefa removida:", remover.titulo)
    }else{
        console.log(`"${tarefa.titulo}" está pendente! Concluir antes de remover`)
    }
    
}

await mongoose.disconnect()