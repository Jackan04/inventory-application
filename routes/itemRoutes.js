import { Router } from "express";
import itemsController from "../controllers/itemsController.js";

const itemRoutes = Router();

itemRoutes.get("/create", itemsController.item_create_get);
itemRoutes.post("/create", itemsController.item_create_post);

itemRoutes.get("/update/:id", itemsController.item_update_get);
itemRoutes.post("/update/:id", itemsController.item_update_post);

itemRoutes.post("/delete/:id", itemsController.item_delete_post);

export default itemRoutes;
