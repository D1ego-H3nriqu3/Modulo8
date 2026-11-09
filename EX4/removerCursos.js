import mongoose from "../conexao.js";
import Curso from "./Cursos.js";

let id = "6aeb3967f46a53c46af496e8"

let remover = await Curso.findByIdAndDelete(id)

if(remover === null){
    console.log("Não foi possível encontrar este curso")
}else{
    console.log(`Curso removido: ${remover.nome}: ${remover.vagas} vagas;`)
}

await mongoose.disconnect()