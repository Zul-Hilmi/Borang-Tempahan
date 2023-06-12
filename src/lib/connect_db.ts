import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect(import.meta.env.DB_STRING);
        console.log("connected to database");
    }catch(err){
        console.log(err);
    }
}
connectDB();
