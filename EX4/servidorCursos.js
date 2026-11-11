import mongoose from "../conexao.js";
import Pet from "../EX3/Pet.js";
import Curso from "./Cursos.js";
import express from "express"

const router = express()
const port = 1331

router.use(express.json())

router.post("/cursos", async (req, res) => {
    let erro = new Curso(req.body).validateSync()

    if(erro){
        res.status(404).send({erro: erro.message})
    }

    let curso = await Curso.create(req.body)
    res.status(201).send(curso)
})

router.get("/cursos/:id", async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send("ID inválido!")
    }

    let curso = await Curso.findById(req.params.id)

    if(curso === null){
        return res.status(404).send("Curso não encontrado!")
    }

    res.send(curso)
})

router.listen(port, () => {
    console.log("Rodando em -", port)
})