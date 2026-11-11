import mongoose from "../../conexao.js";
import Receita from "./Receita.js";
let receitas = await Receita.find();
for (let i = 0; i < receitas.length; i++) {
let receita = receitas[i];
console.log(`${receita.nome} (${receita.ingredientes.length} ingredientes)`);
// Um for dentro do outro: percorre os ingredientes desta receita
for (let j = 0; j < receita.ingredientes.length; j++) {
let ingrediente = receita.ingredientes[j];
console.log(`- ${ingrediente.nome}: ${ingrediente.quantidade}`);
}
}
await mongoose.disconnect();