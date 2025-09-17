const mongoose = require("mongoose");
require("dotenv").config();

const MDBURI=process.env.MDBURI;

const connectDB = async()=>{
    try{
        await mongoose.connect(MDBURI);
        console.log("Db connected successfully")
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;