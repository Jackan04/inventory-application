import { Router } from "express";
import categoriesController from "../controllers/categoriesController.js";

const categoriesRoutes = Router();

// categoriesRoutes.get("/:id", categoriesController.category_details);

categoriesRoutes.get("/create", categoriesController.category_create_get);

export default categoriesRoutes;
