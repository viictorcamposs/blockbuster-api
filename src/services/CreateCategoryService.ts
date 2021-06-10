import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

export class CreateCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(name: string): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Error: Category already exist.").message;
    }

    const newCategory = this.categoriesRepository.create(name);

    return newCategory;
  }
}
