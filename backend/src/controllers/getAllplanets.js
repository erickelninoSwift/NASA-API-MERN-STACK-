const getAllpanets = (request, response) => {
  return response.status(200).json({
    data: "Allpanets Received",
  });
};

module.exports = { getAllpanets };
