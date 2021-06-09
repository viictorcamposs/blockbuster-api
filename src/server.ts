import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.listen(3030, () => console.log("Server is running on port 3030"));
