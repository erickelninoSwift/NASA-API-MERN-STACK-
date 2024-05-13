const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const getAllplanetsRouter = require("./routes/planetsrouter/planets.router");
const allLaunchesRouter = require("./routes/launches/launches.routes");
const app = express();
app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
// get All planets Routes
// =====================
app.use("/planets", getAllplanetsRouter);
app.use("/launches", allLaunchesRouter);
app.get("/*", (requests, response) => {
  return response.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// =========================

module.exports = app;
