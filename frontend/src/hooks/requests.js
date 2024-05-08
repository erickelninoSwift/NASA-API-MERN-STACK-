const API_URl = "http://localhost:8080";

async function httpGetPlanets() {
  const response = await fetch(`${API_URl}/planets`, {
    method: "GET",
  });
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URl}/launches`, { method: "GET" });
  const data = await response.json();
  return data;
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
