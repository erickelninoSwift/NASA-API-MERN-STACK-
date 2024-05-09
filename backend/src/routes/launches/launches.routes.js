const express = require("express");
const { httpLaunchesPlanets } = require("../../controllers/launchesController");
const launchRouter = express.Router();

launchRouter.get("/launches", httpLaunchesPlanets);

module.exports = launchRouter;
