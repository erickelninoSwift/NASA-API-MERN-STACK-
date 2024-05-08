const { launches } = require("../models/launches.model");

const launchesPlanets = (reuqest, response) => {
  return response.status(200).json(Array.from(launches.values()));
};

module.exports = { launchesPlanets };
