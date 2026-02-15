import { Router } from "express";
import categoriesController from "../controllers/categoriesController.js";

const categoriesRoutes = Router();

categoriesRoutes.get("/create", categoriesController.category_create_get);
categoriesRoutes.post("/create", categoriesController.category_create_post);

categoriesRoutes.get("/update/:id", categoriesController.category_update_get);
categoriesRoutes.post("/update/:id", categoriesController.category_update_post);

categoriesRoutes.get("/:id", categoriesController.category_show);

export default categoriesRoutes;
