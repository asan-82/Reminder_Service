const express = require("express");
const { PORT } = require("../src/config/serverConfig");
const jobs = require("../src/utils/job");
const TicketController = require("../src/controllers/ticket-controller");
const { createChannel,subscribeMessage } = require("../src/utils/messageQueue");
const {REMINDER_BINDING_KEY}=require("../src/config/serverConfig");
const EmailService=require("../src/services/email-service");
const app = express();

const setupAndStartServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);
  const channel=await createChannel();
  subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    jobs();
  });
};

setupAndStartServer();
