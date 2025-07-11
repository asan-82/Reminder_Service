const express = require("express");
const { PORT } = require("../src/config/serverConfig");
const jobs = require("../src/utils/job");
const TicketController = require("../src/controllers/ticket-controller");
const { createChannel } = require("../src/utils/messageQueue");
const app = express();

const setupAndStartServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    jobs();
  });
};

setupAndStartServer();
