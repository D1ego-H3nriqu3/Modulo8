import mongoose from "../conexao.js";
import Aluno from "./Aluno.js";

await Aluno.create({
    nome: "Ana",
    nota1: 8,
    nota2: 9
})

await Aluno.create({
    nome: "Bruno",
    nota1: 5,
    nota2: 6
})

await Aluno.create({
    nome: "Carla",
    nota1: 7,
    nota2: 7
})

await Aluno.create({
    nome: "Diego",
    nota1: 10,
    nota2: 6
})

await mongoose.disconnect()