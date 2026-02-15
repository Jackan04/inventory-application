import categoryQueries from "../db/categoryQueries.js";
import itemQueries from "../db/itemQueries.js";
import Category from "../models/category.js";

async function category_show(req, res) {
  const { id } = req.params;
  const category = await categoryQueries.getCategoryById(id);
  const items = await itemQueries.getItemsByCategoryId(id);

  res.render("categories/show", {
    title: category.name,
    category: category,
    id: id,
    items: items,
  });
}

async function category_create_get(req, res) {
  res.render("categories/create", { title: "Create Category" });
}

async function category_create_post(req, res) {
  const { name } = req.body;
  const category = new Category(name);
  try {
    await categoryQueries.addCategory(category);
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    res.redirect("/");
  }
}

async function category_update_get(req, res) {
  const { id } = req.params;
  const categoryToUpdate = await categoryQueries.getCategoryById(id);
  res.render("categories/update", {
    title: "Update Category",
    category: categoryToUpdate,
  });
}

async function category_update_post(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const category = new Category(name);
  try {
    await categoryQueries.updateCategory(id, category);
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    res.redirect("/");
  }
}

async function category_delete_post(req, res) {
  const { id } = req.params;
  try {
    await categoryQueries.deleteCategoryById(id);
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    res.redirect("/");
  }
}

export default {
  category_show,
  category_create_get,
  category_create_post,
  category_update_get,
  category_update_post,
  category_delete_post,
};
