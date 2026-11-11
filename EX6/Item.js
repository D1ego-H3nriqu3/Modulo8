import mongoose from "mongoose";

let item = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome do item é obrigatório!"],
        trim: true
    },
    preco: {
        type: Number,
        min: [0.10, "O preço precisa ser acima de 10 centavos"],
        required: [true, "O preço é obrigatório!"],
        default: 0.10    
    },
    quantidade: {
        type: Number,
        min: [0, "A quantidade deve ser maior ou igual a 0"],
        required: [true, "A quantidade é obrigatória!"],
        default: 0
    }
})

const Item = mongoose.model("Itens", item)

export default Item