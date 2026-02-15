import categoryQueries from "../db/categoryQueries.js";

async function category_list(req, res) {
  const categories = await categoryQueries.getAllCategories();
  res.render("index", { categories: categories });
}

export default { category_list };
