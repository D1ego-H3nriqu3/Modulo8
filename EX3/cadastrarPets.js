import mongoose from "../conexao.js";
import Pet from "./Pet.js";

await Pet.create({
    nome: "Rex",
    especie: "Dinossauro",
    idade: 4592756254545
})

await Pet.create({
    nome: "Mimi",
    especie: "Aranha",
    idade: 2
})

await Pet.create({
    nome: "Vagabundo",
    especie: "Cachorro",
    idade: 13
})

console.log("Pets cadastrados!")

await mongoose.disconnect()