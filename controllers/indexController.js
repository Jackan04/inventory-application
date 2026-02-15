import categoryQueries from "../db/categoryQueries.js";

async function index(req, res) {
  const categories = await categoryQueries.getAllCategories();
  res.render("index", {title: "Home", categories: categories });
}

export default { index };
