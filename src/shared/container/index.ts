import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoryRepositories";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoryRepository";

import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
