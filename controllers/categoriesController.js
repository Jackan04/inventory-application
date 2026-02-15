import categoryQueries from "../db/categoryQueries.js";

async function category_details(req, res) {
  const categories = await categoryQueries.getAllCategories();
  res.render("index", { categories: categories });
}

async function category_create_get(req, res) {
  res.render("createCategory", { title: "Create Category" });
}

export default { category_details, category_create_get };
