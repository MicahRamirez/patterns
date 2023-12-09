import { UserService } from "./user";
import { User } from "../domain";

const mockImplementation = {
  getById: async (id: string) =>
    Promise.resolve({ name: "name", id: "id" } as User),
};

describe("service", () => {
  it("should initialize", () => {
    const service = new UserService(mockImplementation);
    expect(service).toBeInstanceOf(Object);
    expect(typeof service.getUserById).toEqual("function");
  });

  it("should resolve with the the user for id", async () => {
    const service = new UserService(mockImplementation);

    await expect(service.getUserById("any")).resolves.toEqual({
      name: "name",
      id: "id",
    });
  });
});
