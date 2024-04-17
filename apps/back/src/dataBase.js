import mongoose from "mongoose";


export const connectDB = async (MONGO_URI) =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('>>> *** MONGODB *** <<<')
        
    } catch (error) {
        console.log(error)
    }
}
