import mongoose from "../../conexao.js";
import Animal from "./Animal.js";

let animais = await Animal.find()

animais.forEach((animal) => {
    let abrigoE = animal.abrigo
    console.log(`${animal.nome} (${animal.especie})\n--- Abrigo: ${abrigoE.nome} - ${abrigoE.cidade}`)
})

await mongoose.disconnect()