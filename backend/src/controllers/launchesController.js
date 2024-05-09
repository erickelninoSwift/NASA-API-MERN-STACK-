const { DataSend } = require("../models/launches.model");

const httpLaunchesPlanets = (reuqest, response) => {
  return response.status(200).json(DataSend());
};

module.exports = { httpLaunchesPlanets };
