import mongoose from "../../conexao.js";
import Receita from "./Receita.js";
await Receita.create({
nome: "Bolo de cenoura",
ingredientes: [
{ nome: "Cenoura", quantidade: "3 unidades" },
{ nome: "Ovo", quantidade: "4 unidades" },
{ nome: "Farinha", quantidade: "2 xícaras" },
],
});
await Receita.create({
nome: "Panqueca",
ingredientes: [
{ nome: "Leite", quantidade: "1 xícara" },
{ nome: "Farinha", quantidade: "1 xícara" },
],
});
console.log("Receitas cadastradas!");
await mongoose.disconnect();