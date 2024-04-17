import { Router } from "express";
import { getAllCrypto,getCoins, getExchangeRate,getQuote } from "../Controllers/crypto.Controller.js";

const routers = Router()

routers.get('/crypto',getAllCrypto)

routers.get('/crypto/:amount/:currency',getQuote)


routers.get('/coin',getCoins)


routers.get('/coin/:amount/:currency',getExchangeRate)

export default routers