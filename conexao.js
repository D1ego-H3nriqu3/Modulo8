import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, ".env") }) // ajuste se o .env estiver em outra pasta, ex: "../../.env"

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI não definida. Verifique o arquivo .env")
}

await mongoose.connect(process.env.MONGO_URI, {dbName: "LeoesDesenvolvedores"})
console.log("Conectado ao MongoDB")

export default mongoose