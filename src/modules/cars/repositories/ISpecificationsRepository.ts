interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
import { Specification } from "../entities/Specification";

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
