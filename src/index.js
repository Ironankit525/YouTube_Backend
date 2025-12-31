//require('dotenv').config({path:"./env"}) 

import dotenv from "dotenv"
import connectdb from "./db/index.js";
dotenv.config({
    path: './env'
})

connectdb(()=>{
    app.listen(process.env.PORT||5000,()=>{
        console.log(`server is running ankit at ${process.env.PORT}`); 
    })
})
.then()
.catch((err)=>{
    consol.log("mongo db connection faild",err )
})