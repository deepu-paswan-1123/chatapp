import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();


const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const Connection= async ()=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hknnkzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    //deepu:deepu%40123@cluster0.hknnkzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    try{
        await mongoose.connect(URL,{useunifiedTopology:true})
        console.log("database connected successfully")
    }catch(error){
        console.log("database not connected successfully",error.message);
    }
}

export default Connection;





