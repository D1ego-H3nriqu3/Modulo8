import mongoose from "../conexao.js";
import Pet from "./Pet.js";

let pets = await Pet.find()

let posicao = 1

if(posicao>=pets.length){
    console.log("Não há nada para remover apartir desta posição;")
}else{
    let id = pets[posicao]._id
    let remover = await Pet.findByIdAndDelete(id)
    console.log(`Pet removido: ${remover.nome} (${remover.especie})`)
}

await mongoose.disconnect()