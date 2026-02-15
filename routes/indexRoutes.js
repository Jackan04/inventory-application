import { Router } from "express";
import indexController from "../controllers/indexController.js";

const indexRoutes = Router();

indexRoutes.get("/", indexController.index);

export default indexRoutes;
