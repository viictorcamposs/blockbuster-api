import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

categoriesRoutes.post("/", (request, response) => {
  const { name } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const newCategory = createCategoryService.execute(name);

  return response.status(201).json(newCategory);
});

categoriesRoutes.patch("/", (request, response) => {
  const { name: editedName } = request.body;
  const { id } = request.headers;

  const verifyIfCategoryExists = categoriesRepository.findById(String(id));

  if (!verifyIfCategoryExists) {
    return response.status(400).json({
      error: "Couldn't edit category.",
    });
  }

  const editedCategory = categoriesRepository.edit(String(id), editedName);

  return response.status(200).json(editedCategory);
});

categoriesRoutes.delete("/", (request, response) => {
  const { id } = request.headers;

  const verifyIfCategoryExists = categoriesRepository.findById(String(id));

  if (!verifyIfCategoryExists) {
    return response.status(400).json({
      error: "Couldn't delete category.",
    });
  }

  categoriesRepository.remove(String(id));

  return response.status(200).send();
});

export { categoriesRoutes };
