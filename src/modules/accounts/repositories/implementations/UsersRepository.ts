import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error("Method Not Implemented");
  }
}

export { UsersRepository };
