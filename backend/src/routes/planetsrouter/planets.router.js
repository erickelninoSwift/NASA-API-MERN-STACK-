const express = require("express");
const { getAllpanets } = require("../../controllers/getAllplanets");
const planetRouter = express.Router();

planetRouter.get("/", getAllpanets);

module.exports = planetRouter;
