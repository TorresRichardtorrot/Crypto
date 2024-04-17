import { getPriceCoin, getTopCrypto,getValueCoin } from "../logic/dataFetch.js"
// import {dataExamlpe} from "../utils/dataExamlpe.js";

export const getAllCrypto = async (req,res)=>{
    try {
        const data = await getTopCrypto()
        const filteredData = data.Data.map(crypto => ({
            CoinInfo: crypto.CoinInfo,
            RAW: {
                PRICE:crypto.RAW.USD.PRICE,
                OPENDAY:crypto.RAW.USD.OPENDAY,
                HIGHDAY:crypto.RAW.USD.HIGHDAY,
                LOWDAY:crypto.RAW.USD.LOWDAY
            }
          }));
            const VES =  await getPriceCoin("USD","VES",1)
            const EUR = await getPriceCoin("USD","EUR",1)
            const coins = {
                VES:VES.result,
                EUR:EUR.result
            }
        res.json({cryptos:filteredData,coins}).status(200)
    } catch (error) {
        console.log(error)
        res.json({message:"Error Interno"}).status(500)
    }
}

export const getCoins = async(req,res)=>{
    try {
       const VES =  await getPriceCoin("USD","VES",1)
       const EUR = await getPriceCoin("USD","EUR",1)
       const data = {
        VES:VES.result,
        EUR:EUR.result
       }
       res.json(data)
    } catch (error) {
        console.log(error)
        res.json({message:"Error Interno"}).status(500)
    }
}

export const getQuote = async(req,res)=>{
  const {amount,currency} = req.params
  try {
    const values = await getValueCoin(currency)
    const VES =  await getPriceCoin("USD","VES",1)
    console.log(VES)
    const data = {
      ETH: values.ETH * amount,
      USDT: values.USDT * amount,
      BNB: values.BNB * amount,
      BTC: values.BTC * amount,
      EUR:values.EUR * amount,
      VES:VES.result * (values.USDT * amount)
    }
    res.json(data).status(200)

  } catch (error) {
    console.log(error)
    res.json({message:"Error al cotizar"})
  }
}

export const getExchangeRate = async(req,res)=>{
    const {amount,currency} = req.params
    try {
            const value =  await getPriceCoin("USD",currency,amount)
            
          res.json(value.result)      
    } catch (error) {
        console.log(error)
    }
}