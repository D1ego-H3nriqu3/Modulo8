import mongoose from "../conexao.js";
import Curso from "./Cursos.js";

await Curso.create({
    nome: "JavaScript",
    cargaHoraria: 40,
    vagas: 30
})

await Curso.create({
    nome: "Node.js",
    cargaHoraria: 60,
    vagas: 25
})

await Curso.create({
    nome: "MongoDB",
    cargaHoraria: 20,
    vagas: 20
})

await mongoose.disconnect()