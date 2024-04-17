import app from "./app.js";
import {PORT,MONGO_URI} from "./config.js"
import { connectDB } from "./dataBase.js";

app.listen(PORT || 3000 ,()=>{
    console.log('>>> *** Servidor *** <<<', PORT)
    connectDB(MONGO_URI)
})

