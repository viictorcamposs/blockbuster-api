import { Category } from "../model/Category";

export interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category;
  findById(id: string): Category;
  create(name: string): Category;
  edit(id: string, editedName: string): Category;
  remove(id: string): void;
}
