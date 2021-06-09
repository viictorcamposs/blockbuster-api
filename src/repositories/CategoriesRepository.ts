import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
}

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name }: ICreateCategoryDTO): Category {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }
}
