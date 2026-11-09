import mongoose from "../conexao.js";
import Curso from "./Cursos.js";

let cursos = await Curso.find()

let totalVagas = 0;

cursos.forEach((curso) => {
    totalVagas += curso.vagas
    console.log(`ID [${curso._id}] - ${curso.nome}: ${curso.cargaHoraria}h - ${curso.vagas} vagas;`)
})

console.log("Total de vagas:", totalVagas)

await mongoose.disconnect()