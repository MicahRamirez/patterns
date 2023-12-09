import { UserService } from "../../services/user";
import { UserRepositoryInMemory } from "../../repositories/user";

function CreateInMemoryUserService(items) {
  const repo = new UserRepositoryInMemory(items);
  return new UserService(repo);
}

export { CreateInMemoryUserService };
