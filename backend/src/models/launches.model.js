const httpGetAllLaunches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "kepler",
  rocket: "Explore IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["Erick Elnino", "Jackpot"],
  upcoming: true,
  success: true,
};

httpGetAllLaunches.set(launch.flightNumber, launch);

const addNewLauch = (launch) => {
  latestFlightNumber++;
  return httpGetAllLaunches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["Zero to mastery", "NASA"],
      upcoming: true,
      success: true,
    })
  );
};

const DataSend = () => {
  return Array.from(httpGetAllLaunches.values());
};

const existLaunchWithId = (launchID) => {
  const allData = DataSend().find(
    (data) => data.flightNumber === Number(launchID)
  );
  return allData ? true : false;
};

const abortMission = (launchID) => {
  const aborted = httpGetAllLaunches.get(Number(launchID));
  aborted.success = false;
  aborted.upcoming = false;
  return aborted;
};

module.exports = { existLaunchWithId, DataSend, addNewLauch, abortMission };
