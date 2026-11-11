import mongoose from "../conexao.js";
import Tarefa from "./Tarefas.js";
import express from "express"

const router = express()
const port = 1331

router.use(express.json())

router.get("/tarefas", async (req, res) => {
    let tarefas = await Tarefa.find()
    res.send(tarefas)
})

router.post("/tarefas", async (req, res) => {
    let erro = new Tarefa(req.body).validateSync()

    if(erro){
        return res.status(400).send({erro: erro.message})
    }

    let tarefa = await Tarefa.create(req.body)
    res.status(201).send(tarefa)
})

router.put("/tarefas/:id", async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send("ID inválido!")
    }

    let tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body)

    if(tarefa === null){
        res.status(404).send("Tarefa não encontrada!")
    }

    res.send({mensagem: "Tarefa atualizada!"})
})

router.listen(port, () => {
    console.log("Rodando na porta:", port)
})