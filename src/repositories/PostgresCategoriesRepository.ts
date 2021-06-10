import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

export class PostgresCategoriesRepository implements ICategoriesRepository {
  list(): Category[] {
    return null;
  }
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  findById(id: string): Category {
    console.log(id);
    return null;
  }
  create(name: string): Category {
    console.log(name);
    return null;
  }
  edit(id: string, editedName: string): Category {
    console.log(id, editedName);
    return null;
  }
  remove(id: string): void {
    console.log(id);
    return null;
  }
}
