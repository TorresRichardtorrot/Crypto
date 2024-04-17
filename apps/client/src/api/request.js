import axios, {path} from "./axios.js"

export const getCryptoRequest = ()=> axios.get(`${path}/api/crypto`)

export const getValuesCryopto = (amount,currency)=> axios.get(`${path}/api/crypto/${amount}/${currency}`)