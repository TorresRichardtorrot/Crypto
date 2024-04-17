import { Router } from "express";
import { createCoin, getCoinForName } from "../Controllers/coins.Controller.js";

const routers = Router()

routers.post('/coins',createCoin)
routers.get('/coins',getCoinForName)

export default routers