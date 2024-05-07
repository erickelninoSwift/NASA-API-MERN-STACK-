const path = require("path");
const fs = require("fs");
const { parse } = require("csv-parse");

const habitablePlanets = [];

const isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

function LaodData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          return habitablePlanets.push(data);
        }
      })
      .on("end", () => {
        resolve();
      })
      .on("error", (error) => {
        console.log(`Error was found while fetching planets ${error}`);
        reject(error);
      });
  });
}

module.exports = {
  LaodData,
  planets: habitablePlanets,
};
