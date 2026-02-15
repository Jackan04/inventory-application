import { Router } from "express";
import categoriesController from "../controllers/categoriesController.js";

const categoriesRoutes = Router();

categoriesRoutes.get("/:id", categoriesController.category_show);

categoriesRoutes.get("/create", categoriesController.category_create_get);

categoriesRoutes.post("/create", categoriesController.category_create_post);

export default categoriesRoutes;
