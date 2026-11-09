import mongoose, { Types } from "mongoose";

let time = new mongoose.Schema({
    nome: {type: String},
    vitorias: {type: Number},
    empates: {type: Number},
    derrotas: {type: Number}
})

const Time = mongoose.model("Times", time)

export default Time