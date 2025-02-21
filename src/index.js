import dotenv from "dotenv"
import mongoose from "mongoose"; 
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()

















// import express from "express"
// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERROR :", error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening at port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error(`Mongo db not connected`)
//     }
// })()