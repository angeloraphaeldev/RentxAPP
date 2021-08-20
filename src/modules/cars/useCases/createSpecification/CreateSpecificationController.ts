import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createSpecification = container.resolve(CreateSpecificationUseCase);

    await createSpecification.execute({ name, description });

    return res.status(201).send(createSpecification);
  }
}

export { CreateSpecificationController };
