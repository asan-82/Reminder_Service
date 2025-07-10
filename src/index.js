const express=require("express");
const {PORT}=require("../src/config/serverConfig");
const {sendBasicEmail}=require("../src/services/email-service");
const cron = require("node-cron");
const app=express();

const setupAndStartServer=()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
     
       cron.schedule('*/15 * * * *',()=>{
     sendBasicEmail(
            'support@gmail.com',
            'abc@gmail.com',
            'This is a testing email',
            'Hey, how are you, I hope you like the support'
        );
    })
    });
   
    
}

setupAndStartServer();