import express from "express";
import router from "./serverRoutes.js";

const PORT = 8080;
const app = express();

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});
