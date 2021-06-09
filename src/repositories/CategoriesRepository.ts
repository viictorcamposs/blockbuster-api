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
    const category = this.categories.find(
      (category) => category.name === name.toLowerCase()
    );

    return category;
  }

  create(name: string): Category {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name: name.toLowerCase(),
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  edit(name: string, editedName: string): Category {
    const category = this.categories.find(
      (category) => category.name === name.toLowerCase()
    );

    const editedCategory: Category = {
      ...category,
      name: editedName.toLowerCase(),
    };

    this.categories = this.categories.filter(
      (category) => category.name !== name.toLowerCase()
    );
    this.categories.push(editedCategory);

    return editedCategory;
  }
}
