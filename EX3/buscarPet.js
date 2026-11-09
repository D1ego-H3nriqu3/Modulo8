import mongoose from "../conexao.js";
import Pet from "./Pet.js";

let pets = await Pet.find()

let posicao = 2

if(posicao>=pets.length){
    console.log("Não há nada para mostrar apartir desta posição;")
}else{
    let id = pets[posicao]._id
    let pet = await Pet.findById(id)
    console.log(`${pet.nome} é um(a) ${pet.especie} de ${pet.idade} anos`)
}

await mongoose.disconnect()