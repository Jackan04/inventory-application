import { Pool } from "pg";

const URI = process.env.DATABASE_URI;

export default new Pool({
  connectionString: URI,
});
