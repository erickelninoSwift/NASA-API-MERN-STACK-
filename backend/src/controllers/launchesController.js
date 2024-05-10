const { DataSend, addNewLauch } = require("../models/launches.model");

const httpLaunchesPlanets = (reuqest, response) => {
  return response.status(200).json(DataSend());
};

const httpAddNewLauch = (request, response) => {
  const launch = request.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLauch(launch);
  response.status(201).json({
    data: launch,
  });
};

module.exports = { httpLaunchesPlanets, httpAddNewLauch };
