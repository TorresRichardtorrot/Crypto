import axios from 'axios'


const instace = axios.create({
    baseURL: "/",
    withCredentials:true
})
export const path = import.meta.env.DEV ? "http://localhost:8090":""
export default instace

