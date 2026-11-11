import mongoose from "mongoose";

let pet = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "Nome é obrigatório"],
        trim: true
    },
    especie: {type: String},
    idade: {type: Number}
})

const Pet = mongoose.model("Pets", pet)

export default Pet

