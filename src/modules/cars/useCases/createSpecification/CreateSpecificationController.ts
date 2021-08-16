import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createSpecification = await this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return res.status(201).send(createSpecification);
  }
}

export { CreateSpecificationController };
