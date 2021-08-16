import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoryRepositories";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoryRepository";
//
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
