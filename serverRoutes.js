import express from "express";
import serverController from "./controllers/serverController.js";

const router = express.Router();

router.get("/", serverController.homePageHandler);

router.get("/about", serverController.aboutPageHandler);

router.get("/contact-me", serverController.contactMePageHandler);

router.use(serverController.errorHandler);

export default router;
