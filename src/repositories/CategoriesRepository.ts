import { Category } from "../model/Category";

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  create(name: string): Category {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }
}
