const express=require("express");
const {PORT}=require("../src/config/serverConfig");
const {sendBasicEmail}=require("../src/services/email-service");
const jobs=require("../src/utils/job");
const TicketController=require("../src/controllers/ticket-controller");
const app=express();

const setupAndStartServer=()=>{
    app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        jobs();
     
       
    });
   
    
}

setupAndStartServer();