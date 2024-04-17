import { Router } from "express";
import { createCoin, getCoinForName,updateCoinForName } from "../Controllers/coins.Controller.js";

const routers = Router()

routers.post('/coins',createCoin)
routers.put('/coins/:Name',updateCoinForName)
routers.get('/coins',getCoinForName)

export default routers