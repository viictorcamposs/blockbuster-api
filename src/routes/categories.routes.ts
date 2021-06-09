import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name } = request.body;

  const newCategory = categoriesRepository.create({ name });

  return response.status(201).json(newCategory);
});

export { categoriesRoutes };
