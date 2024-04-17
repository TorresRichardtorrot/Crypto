import CoinModel from "../Models/coinSchema.js"

export const createCoin = async(req,res) =>{
    const {Name,FullName,Price} = req.body
    try {
        const newCoin = await CoinModel.create({Name,FullName,Price})
        res.json(newCoin).status(201)
    } catch (error) {
        console.error(error)
        res.json({message:"Error al Crear la Moneda"}).status(500)
    }
}

export const getCoinForName = async(req,res)=>{
    const {Name} = req.body
    try {
        const coinFound = await CoinModel.findOne({Name})
        if(!coinFound) return res.json({message:"Moneda no encontrada"}).status(404)
        res.json(coinFound).status(200)
    } catch (error) {
        console.error(error)
        res.json({message:"Error interno"}).status(500)
    }
}

export const updateCoinForName = async(req,res)=>{
    const {Name} = req.params
    const data = req.body
    try {
        const coinFound = await CoinModel.findOne({Name})
        if(!coinFound) return res.json({message:"Moneda no encontrada"}).status(404)
        
         await CoinModel.findByIdAndUpdate(coinFound._id, data)

        res.json({message:"Moneda Actualizada"}).status(200)
    } catch (error) {
        console.error(error)
        res.json({message:"Error interno"}).status(500)
    }
}