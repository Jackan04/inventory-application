import { Router } from "express";
import indexController from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", indexController.category_list);

export default indexRouter;
