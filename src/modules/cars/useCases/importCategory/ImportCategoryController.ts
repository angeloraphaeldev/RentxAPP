import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importCategory = container.resolve(ImportCategoryUseCase);

    await importCategory.execute(file);

    return res.status(201).send();
  }
}

export { ImportCategoryController };
