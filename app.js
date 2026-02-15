import express from "express";
import dotenv from "dotenv";
import indexRoutes from "./routes/indexRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(`Server running on port ${PORT}`);
});
