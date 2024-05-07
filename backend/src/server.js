const http = require("http");
const dotenv = require("dotenv");
const application = require("./app");
const { LaodData } = require("./models/planets.model");

dotenv.config();
const PORT = process.env.PORT || 8000;

const server = http.createServer(application);

const startServer = async () => {
  await LaodData();
  server.listen(PORT, () => {
    console.log(`http server is running on PORT : ${PORT}`);
  });
};

startServer();
