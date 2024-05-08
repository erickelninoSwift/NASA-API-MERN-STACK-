const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "kepler",
  rocket: "Explore IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["Erick Elnino", "Jackpot"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };
