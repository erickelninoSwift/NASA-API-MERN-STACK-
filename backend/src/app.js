const express = require("express");
const cors = require("cors");
const path = require("path");
const getAllplanetsRouter = require("./routes/planetsrouter/planets.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
// get All planets Routes
// =====================

app.use(getAllplanetsRouter);
// =========================

module.exports = app;
