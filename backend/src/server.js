const http = require("http");
const dotenv = require("dotenv");
const application = require("./app");

dotenv.config();
const PORT = process.env.PORT || 8000;

const server = http.createServer(application);

server.listen(PORT, () => {
  console.log(`http server is running on PORT : ${PORT}`);
});
