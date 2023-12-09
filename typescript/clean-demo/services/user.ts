import type { User } from "../domain";

// defining the interface required by the service in the UserService
// instead of being dependent on the interface defined in the repository
// why is this good ?
// can switch out an implementation that has an equivalent interface
// rather than being implicitly dependent on a specific implementation's interface
interface UserRepository {
  getById(id: string): Promise<User>;
}

class UserService {
  private repo: UserRepository;
  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  async getUserById(id: string) {
    const result = await this.repo.getById(id);
    return result;
  }
}

export { UserService };
