import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DATABASE_URI;

export default new Pool({
  connectionString: URI,
});
