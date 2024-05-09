const { getAllMyPlanets } = require("../models/planets.model");

const getAllpanets = (request, response) => {
  return response.status(200).json({
    Status: "success",
    data: getAllMyPlanets(),
  });
};

module.exports = { getAllpanets };
