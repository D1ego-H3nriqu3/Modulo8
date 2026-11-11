import express from "express"
import mongoose from "../conexao.js"
import Aluno from "./Aluno.js"

const router = express()
const port = 1331

router.use(express.json())

router.post("/alunos", async (req, res) => {
    let erro = new Aluno(req.body).validateSync()

    if(erro){
        return res.status(400).send({erro: erro.message})
    }

    let aluno = await Aluno.create(req.body)
    res.status(201).send(aluno)
})

router.get("/alunos/:id", async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido!"})
    }

    let aluno = await Aluno.findById(req.params.id)

    if(aluno === null){
        return res.status(404).send({erro: "Aluno não encontrado!"})
    }

    res.send(`${aluno.nome} - Média: ${(aluno.nota1+aluno.nota2)/2}`)
})

router.listen(port, () => {
    console.log("Rodando na porta:", port)
})