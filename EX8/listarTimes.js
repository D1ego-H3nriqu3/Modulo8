import mongoose from "../conexao.js";
import Time from "./Time.js";

let times = await Time.find()

let lider = ""
let maiorP = 0

times.forEach((time) => {
    let pontuacao = (time.vitorias * 3) + (time.empates * 1)
    if(pontuacao > maiorP){
        maiorP = pontuacao
        lider = time.nome
    }
    console.log(`- ${time.nome}: ${pontuacao} pontos (${time.vitorias}V - ${time.empates}E - ${time.derrotas}D)`)
})

console.log(`Lider: ${lider} com ${maiorP} pontos`)

await mongoose.disconnect()