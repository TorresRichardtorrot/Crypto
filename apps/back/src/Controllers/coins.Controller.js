import CoinModel from "../Models/coinSchema.js"

export const createCoin = async(req,res) =>{
    const {Name,FullName,Price} = req.body
    try {
        const res = await CoinModel.create({Name,FullName,Price})
        res.json(res).status(201)
    } catch (error) {
        console.log(error)
    }
}

export const getCoinForName = async(req,res)=>{
    const {Name} = req.body
    try {
        const coinFound = await CoinModel.findOne({Name})
        res.json(coinFound).status(200)
    } catch (error) {
        console.log(error)
    }
}