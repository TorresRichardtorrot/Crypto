import mongoose from "mongoose"

const coinSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            trim:true,
            unique:true,
            required:true
        },
        FullName:{
            type:String,
            trim:true,
            unique:true,
            required:true
        },
        Price:{
            type:Number,
            trim:true,
            default:null
        }
    },{
        timestamps:true,
        versionKey:false
    }
)

export default mongoose.model("Coin",coinSchema)