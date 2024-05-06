const express = require("express");
const getAllplanetsRouter = require("./routes/planetsrouter/planets.router");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// get All planets Routes
// =====================
app.use(getAllplanetsRouter);

// =========================

module.exports = app;
