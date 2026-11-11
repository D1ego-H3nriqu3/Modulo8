import mongoose from "mongoose";

let animal = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório!"],
        trim: true
    },
    especie: {
        type: String,
        enum: {
            values: ["Cachorro", "Gato"],
            message: "{VALUE} não está para adoção"
        },
        default: "Cachorro",
        trim: true
    },

    abrigo: {
        nome: {
            type: String,
            required: [true, "Informe o abrigo!"],
            trim: true
        },
        cidade: {
            type: String,
            trim: true,
            default: "X"
        }
    }
})

let Animal = mongoose.model("Animal", animal)

export default Animal