import http from "http";
import serverHandler from "./controllers/serverController.js";

const PORT = 8080;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});
