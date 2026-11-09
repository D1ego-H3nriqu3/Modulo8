import mongoose from "../conexao.js";
import Pet from "./Pet.js";

let pets = await Pet.find()

console.log("Pets cadastrados:", pets.length)

let posicao = 0

pets.forEach((pet) => {
    console.log(`[${posicao}] - ${pet.nome} é um(a) ${pet.especie} de ${pet.idade} anos`)
    posicao++
})