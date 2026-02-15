import pool from "./pool.js";

class CategoryQueries {
  async getAllCategories() {
    const result = await pool.query("SELECT * FROM categories");
    return result.rows;
  }

  async getCategoryById(id) {
    const result = await pool.query("SELECT * FROM categories WHERE id=$1", [
      id,
    ]);
    const row = result.rows[0];

    if (!row) {
      throw new Error(`Category with id ${id} not found`);
    }

    return row;
  }

  async addCategory(name) {
    const result = await pool.query(
      "INSERT INTO categories (name) VALUES ($1) RETURNING *",
      [name],
    );
    return result.rows[0];
  }

  async deleteCategoryById(id) {
    const result = await pool.query(
      "DELETE FROM categories WHERE id=$1 RETURNING *",
      [id],
    );

    const row = result.rows[0];

    if (!row) {
      throw new Error(`Failed to delete category with id ${id}`);
    }

    return row;
  }

  async updateCategory(id, name) {
    const result = await pool.query(
      "UPDATE categories SET name = $1 WHERE id=$2 RETURNING *",
      [name, id],
    );
    const row = result.rows[0];

    if (!row) {
      throw new Error(`Failed to update category with id ${id}`);
    }

    return row;
  }
}

export default new CategoryQueries();
