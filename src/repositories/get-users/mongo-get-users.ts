import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/User";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Matheus",
        lastName: "Duarte",
        email: "matheus@email.com",
        password: "123",
      },
    ];
  }
}
