const express = require("express");
const {
  httpLaunchesPlanets,
  httpAddNewLauch,
  httpDeleteLaunch,
} = require("../../controllers/launchesController");
const launchRouter = express.Router();

launchRouter.get("/", httpLaunchesPlanets);
launchRouter.post("/", httpAddNewLauch);
launchRouter.delete("/:id", httpDeleteLaunch);

module.exports = launchRouter;
