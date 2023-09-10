import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import usersRoute from './routes/users.js';


const app = express();
dotenv.config();

const connect= async() => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDb")
    }
    catch(error){
      throw error 
    }
    
}

mongoose.connection.on("disconnected" , ()=> {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=> {
    console.log("mongoDB Connected")
})


const PORT = process.env.PORT || 8800

//Middlewares 
app.use(cors());
//app.use(cookieParser())
app.use(express.json());
app.use("/api/users" , usersRoute);




//Handling Errors 

app.use((err,req,res,next)=> {
    const errorStatus = err.status || 500 
    const errorMessage = err.message || "Something Went Wrong!"

    return res.status(errorStatus).json({
        success: false ,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
})

app.listen(PORT, ()=> {
    connect()
    console.log(`Connected to Backend!, Port No : ${PORT}`)
})