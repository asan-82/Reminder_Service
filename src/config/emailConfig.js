const nodemailer=require("nodemailer");
const {EMAIL_ID,EMAIL_PASSWORD}=require("../config/serverConfig");

const sender=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: EMAIL_ID,
        pass: EMAIL_PASSWORD
    }
});

module.exports=sender;