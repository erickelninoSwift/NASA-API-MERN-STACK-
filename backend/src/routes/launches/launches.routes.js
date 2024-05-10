const express = require("express");
const {
  httpLaunchesPlanets,
  httpAddNewLauch,
} = require("../../controllers/launchesController");
const launchRouter = express.Router();

launchRouter.get("/", httpLaunchesPlanets);
launchRouter.post("/", httpAddNewLauch);

module.exports = launchRouter;
