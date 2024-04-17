import { CURRENCY_APIKEY } from "../config.js"

export const getTopCrypto = async ()=>{
    try {
        const data = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=4&tsym=USD`)
        return  await data.json()
    } catch (error) {
        console.log(error)
        return null
    }
} 

export const getPriceCoin = async(from,to,amount)=>{
    var myHeaders = new Headers();
    myHeaders.append("apikey", CURRENCY_APIKEY);

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
    try {
        const data = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,requestOptions)
        return data.json()
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getValueCoin = async(crypto)=>{
    try {
        const data = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=ETH,USDT,BNB,BTC,EUR`)
        return  await data.json()
    } catch (error) {
        console.log(error)
        return null
    }
}