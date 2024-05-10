const express = require("express");
const {
  httpLaunchesPlanets,
  httpAddNewLauch,
} = require("../../controllers/launchesController");
const launchRouter = express.Router();

launchRouter.get("/launches", httpLaunchesPlanets);
launchRouter.post("/launches", httpAddNewLauch);

module.exports = launchRouter;
