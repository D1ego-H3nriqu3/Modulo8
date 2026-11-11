import mongoose from "../../conexao.js";
import Animal from "./Animal.js";

await Animal.create({
    nome: "Caramelo",
    especie: "Cachorro",
    abrigo: {
        nome: "LarFeliz",
        cidade: "Campinas"
    }
})

await Animal.create({
    nome: "Frajola",
    especie: "Gato",
    abrigo: {
        nome: "Patinhas",
        cidade: "Santos"
    }
})

console.log("Animais cadastrados com sucesso!")

await mongoose.disconnect()