const express = require("express");
const { launchesPlanets } = require("../../controllers/launchesController");
const launchRouter = express.Router();

launchRouter.get("/launches", launchesPlanets);

module.exports = launchRouter;
