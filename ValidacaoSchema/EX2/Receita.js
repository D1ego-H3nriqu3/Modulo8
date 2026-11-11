import mongoose from "mongoose";
let receitaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório!"],
        minlength: [3, "O nome precisa ter no mínimo 3 letras!"],
        trim: true
    },
    ingredientes: [
        {
            nome: {
                type: String,
                required: [true, "Informe o ingrediente!"],
                trim: true
            },
            quantidade: {
                type: String,
                trim: true,
                default: 0
            }
        }
    ]
});
let Receita = mongoose.model("Receita", receitaSchema);
export default Receita;