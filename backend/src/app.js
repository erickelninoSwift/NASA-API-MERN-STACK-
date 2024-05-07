const express = require("express");
const cors = require("cors");
const getAllplanetsRouter = require("./routes/planetsrouter/planets.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// get All planets Routes
// =====================

app.use(getAllplanetsRouter);

// =========================

module.exports = app;
