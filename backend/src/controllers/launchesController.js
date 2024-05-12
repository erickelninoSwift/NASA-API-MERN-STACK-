const { DataSend, addNewLauch } = require("../models/launches.model");

const httpLaunchesPlanets = (reuqest, response) => {
  return response.status(200).json(DataSend());
};

const httpAddNewLauch = (request, response) => {
  const launch = request.body;

  if (
    !launch.mission ||
    !launch.launchDate ||
    !launch.rocket ||
    !launch.target
  ) {
    return response.status(400).json({
      message: "BAd Request : Data field empty",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (
    isNaN(launch.launchDate) ||
    launch.launchDate.toString() === "Invalid String"
  ) {
    return response.status(400).json({
      message: "Date format is not valid",
    });
  }
  addNewLauch(launch);
  response.status(201).json({
    data: launch,
  });
};

module.exports = { httpLaunchesPlanets, httpAddNewLauch };
