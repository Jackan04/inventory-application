import pool from "./pool.js";

class ItemQueries {
  async getAllItems() {
    const result = await pool.query("SELECT * FROM items");
    return result.rows;
  }

  async getItemById(id) {
    const result = await pool.query("SELECT * FROM items WHERE id=$1", [id]);

    if (!result.rows[0]) {
      throw new Error(`Item with id ${id} not found`);
    }
    return result.rows[0];
  }

  async addItem(item) {
    const result = await pool.query(
      "INSERT INTO items (name, price, category_id) VALUES ($1, $2, $3) RETURNING *",
      [item.name, item.price, item.categoryId],
    );

    return result.rows[0];
  }

  async deleteItemById(id) {
    try {
      const result = await pool.query(
        "DELETE FROM items WHERE id=$1 RETURNING *",
        [id],
      );

      const row = result.rows[0];

      if (!row) {
        throw new Error(`Failed to delete item with id ${id}`);
      }

      return row;
    } catch (error) {
      throw new Error(`Failed to delete item with id ${id}`);
    }
  }

  async updateItem(item) {
    try {
      const result = await pool.query(
        "UPDATE items SET name = $1, price=$2, category_id=$3 WHERE id=$4 RETURNING *",
        [item.name, item.price, item.category_id, item.id],
      );

      const row = result.rows[0];

      if (!row) {
        throw new Error(`Failed to update item with id ${id}`);
      }

      return row;
    } catch (error) {
      throw new Error(`Failed to update item with id ${item.id}`);
    }
  }
}

export default new ItemQueries();
