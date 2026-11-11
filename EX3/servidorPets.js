import express from "express"
import mongoose from "../conexao.js"
import Pet from "./Pet.js"

const router = express()
const port = 1331

router.use(express.json())

router.get("/pets", async (req, res) => {
    let pets = await Pet.find()

    res.send(pets)
})

router.post("/pets", async (req, res) => {
    let erro = new Pet(req.body).validateSync()
    
    if(erro){
        return res.status(400).send({erro: erro.message})
    }

    let pet = await Pet.create(req.body)
    res.status(201).send(pet)
})

router.listen(port, () => {
    console.log("Rodando em 1331")
})