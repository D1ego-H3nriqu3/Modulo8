import mongoose from "../conexao.js";
import Curso from "./Cursos.js";

let id = "6aeb3967f46a53c46af496ea"

let curso = await Curso.findById(id)

if(curso === null){
    console.log("Não foi possível encontrar este curso")
}else{
    console.log(`${curso.nome}: ${curso.cargaHoraria}h - ${curso.vagas} vagas;`)
}

await mongoose.disconnect()