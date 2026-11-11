import mongoose from "../../conexao.js";
import Turma from "./Turma.js";

await Turma.create({
    nome: "JavaScript",
    vagas: 30,

    professor: {
        nome: "Vinícius"
    }
})

await Turma.create({
    nome: "Python",

    professor: {
        nome: "Paula"
    }
})

console.log("Turmas cadastradas com sucesso!")

await mongoose.disconnect()
