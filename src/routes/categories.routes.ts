import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

categoriesRoutes.post("/", (request, response) => {
  const { name } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({
      error: "Couldn't create category.",
    });
  }

  const newCategory = categoriesRepository.create(name);

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
