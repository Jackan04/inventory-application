import categoryQueries from "../db/categoryQueries.js";
import itemQueries from "../db/itemQueries.js";

async function category_show(req, res) {
  const { id } = req.params;
  const category = await categoryQueries.getCategoryById(id);
  const items = await itemQueries.getItemsByCategoryId(id);

  res.render("categories/show", {
    title: category.name,
    category: category,
    items: items,
  });
}

async function category_create_get(req, res) {
  res.render("categories/create", { title: "Create Category" });
}

async function category_create_post(req, res) {
  const { name } = req.body;
  try {
    await categoryQueries.addCategory(name);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500);
    res.redirect("/");
  }
}

export default { category_show, category_create_get, category_create_post };
