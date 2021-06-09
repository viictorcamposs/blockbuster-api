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

categoriesRoutes.patch("/:name/edit", (request, response) => {
  const { name: editedName } = request.body;
  const { name } = request.params;

  const foundCategory = categoriesRepository.findByName(name);

  if (!foundCategory) {
    return response.status(400).json({
      error: "Couldn't edit category.",
    });
  }

  const editedCategory = categoriesRepository.edit(name, editedName);

  return response.status(200).json(editedCategory);
});

export { categoriesRoutes };
