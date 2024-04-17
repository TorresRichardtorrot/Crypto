import express from 'express'
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import cors from 'cors'
import { URL_FRON_END } from './config.js'
import morgan from 'morgan'
import CryptoRouter from "./Routers/crypto.routes.js"
import CoinsRouter from "./Routers/coin.routes.js"
const app = express()

const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

app.use(
    cors({
    origin: URL_FRON_END,
    credentials: true,
}))

app.use(morgan("dev"))
app.use(express.json())

app.use('/api',CryptoRouter)
app.use('/api',CoinsRouter)

app.use(express.static(join(__dirname,"..","..","client/dist/")))

app.get('/*', (req,res)=>{
  res.sendFile(join(__dirname, '..','..','client/dist/', 'index.html'))
})


export default app