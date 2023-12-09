import type { User } from "../domain";

class UserRepositoryInMemory {
  private container;
  constructor(items) {
    this.container = items;
  }

  getById(id: string): Promise<User> {
    return Promise.resolve(this.container.find((elem) => elem === id) ?? null);
  }
}

export { UserRepositoryInMemory };
