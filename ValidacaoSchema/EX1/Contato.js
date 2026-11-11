import mongoose from "mongoose";
let contatoSchema = new mongoose.Schema({
nome: {
    type: String,
    required: [true, "O nome é obrigatório!"],
    trim: true
},
telefone: { type: String },
endereco: {
    rua: {
        type: String,
        trim: true,
        default: "-----------------"
    },
    numero: {
        type: Number,
        min: [0, "O número não pode ser negativo!"],
        default: 0
    },
    cidade: {
        type: String,
        required: [true, "A cidade é obrigatória"],
        trim: true
    }
}
});
let Contato = mongoose.model("Contato", contatoSchema);
export default Contato;