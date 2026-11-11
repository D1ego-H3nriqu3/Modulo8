import mongoose from "../../conexao.js";
import Turma from "./Turma.js";

let turmas = await Turma.find()

turmas.forEach((turma) => {
    let professorU = turma.professor
    console.log(`${turma.nome}: ${turma.vagas} (prof: ${professorU.nome})`)
})

await mongoose.disconnect()