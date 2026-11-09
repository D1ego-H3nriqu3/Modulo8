import mongoose from "../conexao.js";
import Aluno from "./Aluno.js";

let alunos = await Aluno.find()

let aprovados = 0

alunos.forEach((aluno) => {
    let media = ((aluno.nota1 + aluno.nota2) / 2)
    if(media >= 7){
        console.log(`- ${aluno.nome}: média ${media.toFixed(1)} - Aprovado!`)
        aprovados++
    }else{
        console.log(`- ${aluno.nome}: média ${media.toFixed(1)} - Reprovado!`)
    }
})

console.log(`Aprovados: ${aprovados} de ${alunos.length}`)

await mongoose.disconnect()