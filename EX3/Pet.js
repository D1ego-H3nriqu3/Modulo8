import mongoose from "mongoose";

let pet = new mongoose.Schema({
    nome: {type: String},
    especie: {type: String},
    idade: {type: Number}
})

const Pet = mongoose.model("Pets", pet)

export default Pet

