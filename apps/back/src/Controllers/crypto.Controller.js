import { getPriceCoin, getTopCrypto,getValueCoin } from "../logic/dataFetch.js"
import CoinModel from "../Models/coinSchema.js"
// import {dataExamlpe} from "../utils/dataExamlpe.js";

export const getAllCrypto = async (req,res)=>{
    let VES,EUR
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
          const VESFromApi =  await getPriceCoin("USD","VES",1)
          const EURFromApi = await getPriceCoin("USD","EUR",1)
   
           VES = VESFromApi.result
           EUR = EURFromApi.result
   
          if(!VES){
           const res = await CoinModel.findOne({Name:"VES"}).select('Price')
           VES = res.Price
          }
          if(!EUR){
           const res = await CoinModel.findOne({Name:"EUR"}).select('Price')
           EUR = res.Price
          }
   
          const coins = {VES,EUR}
        res.json({cryptos:filteredData,coins}).status(200)
    } catch (error) {
        console.log(error)
        res.json({message:"Error Interno"}).status(500)
    }
}

export const getCoins = async(req,res)=>{
    let VES,EUR
    try {
       const VESFromApi =  await getPriceCoin("USD","VES",1)
       const EURFromApi = await getPriceCoin("USD","EUR",1)

        VES = VESFromApi.result
        EUR = EURFromApi.result

       if(!VES){
        const res = await CoinModel.findOne({Name:"VES"}).select('Price')
        VES = res.Price
       }
       if(!EUR){
        const res = await CoinModel.findOne({Name:"EUR"}).select('Price')
        EUR = res.Price
       }

       console.log(VES,EUR)

       const data = {
        VES:VES,
        EUR:EUR
       }
       res.json(data).status(200)
    } catch (error) {
        console.log(error)
        res.json({message:"Error Interno"}).status(500)
    }
}

export const getQuote = async(req,res)=>{
  const {amount,currency} = req.params
  let VES
  try {
    const values = await getValueCoin(currency)
    const result =  await getPriceCoin("USD","VES",1)
    VES = result.result

    if(!VES){
      const res = await CoinModel.findOne({Name:"VES"}).select('Price')
      VES = res.Price
    }
    const data = {
      ETH: values.ETH * amount,
      USDT: values.USDT * amount,
      BNB: values.BNB * amount,
      BTC: values.BTC * amount,
      EUR:values.EUR * amount,
      VES:VES * (values.USDT * amount)
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