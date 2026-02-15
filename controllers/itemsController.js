import categoryQueries from "../db/categoryQueries.js";
import itemQueries from "../db/itemQueries.js";
import Item from "../models/item.js";

async function item_create_get(req, res) {
  const categories = await categoryQueries.getAllCategories();
  res.render("items/create", { title: "Create Item", categories: categories });
}

async function item_create_post(req, res) {
  const { name, price, category_id } = req.body;
  const item = new Item(name, price, category_id);

  try {
    await itemQueries.addItem(item);
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    res.redirect(`/categories/${category_id}`);
  }
}

async function item_update_get(req, res) {
  const { id } = req.params;
  const itemToUpdate = await itemQueries.getItemById(id);
  const categories = await categoryQueries.getAllCategories();

  res.render("items/update", {
    title: "Update Item",
    id: id,
    item: itemToUpdate,
    categories: categories,
  });
}

async function item_update_post(req, res) {
  const { id } = req.params;
  const { name, price, category_id } = req.body;
  const updatedItem = new Item(name, price, category_id);

  try {
    await itemQueries.updateItem(id, updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    res.redirect(`/categories/${updatedItem.category_id}`);
  }
}

async function item_delete_post(req, res) {
  const { id } = req.params;
  const { category_id } = await itemQueries.getItemById(id);

  try {
    await itemQueries.deleteItemById(id);
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    res.redirect(`/categories/${category_id}`);
  }
}

export default {
  item_create_get,
  item_create_post,
  item_update_get,
  item_update_post,
  item_delete_post,
};
