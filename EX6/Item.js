import mongoose from "mongoose";

let item = new mongoose.Schema({
    nome: {type: String},
    preco: {type: Number},
    quantidade: {type: Number}
})

const Item = mongoose.model("Itens", item)

export default Item