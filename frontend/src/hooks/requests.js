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
  return data.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.

  // Submit given launch data to launch system.
  try {
    return await fetch(`${API_URl}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    console.log(`Error found : ${error}`);
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  return await fetch(`${API_URl}/launches/:${id}`, {
    method: "DELETE",
  });
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
