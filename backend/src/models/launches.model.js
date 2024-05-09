const httpGetAllLaunches = new Map();

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

httpGetAllLaunches.set(launch.flightNumber, launch);

const DataSend = () => {
  return Array.from(httpGetAllLaunches.values());
};

const allData = (module.exports = { DataSend });
