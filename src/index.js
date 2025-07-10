const express=require("express");
const {PORT}=require("../src/config/serverConfig");
const app=express();

const setupAndStartServer=()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();