import mongoose from "../conexao.js";
import Item from "./Item.js";
import express from "express"

const router = express()
const port = 1331

router.use(express.json())

router.get("/itens", async (req, res) => {
    let itens = await Item.find()
    res.send(itens)
})

router.post("/itens", async (req, res) => {
    let erro = new Item(req.body).validateSync()

    if(erro){
        return res.status(400).send({erro: erro.message})
    }

    let item = await Item.create(req.body)
    res.status(201).send(item)
})

router.delete("/itens/:id", async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "Id inválido!"})
    }

    let item = await Item.findByIdAndDelete(req.params.id)

    if(item === null){
        return res.status(404).send({erro: "Item não encontrado!"})
    }

    res.send({mensagem: "Item excluído!"})
})

router.listen(port, () => {
    console.log("Rodando na porta:", port)
})