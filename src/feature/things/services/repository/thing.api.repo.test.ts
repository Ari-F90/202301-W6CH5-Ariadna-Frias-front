import { ThingApiRepo } from "./thing.api.repo";

const repo = new ThingApiRepo();

describe("Given the things repo", () => {
  describe("When create a new instance and call method loadThings", () => {
    test("Then it should return the values loaded", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([{ name: "thing" }]),
      });

      expect(repo).toBeInstanceOf(ThingApiRepo);
      const loadAll = await repo.loadThings();
      expect(loadAll).toEqual([{ name: "thing" }]);
    });
  });

  describe("When it calls the method getThing", () => {
    test("Then it should return the value of one thing", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 1, name: "thing1" }),
      });

      const getOneThing = await repo.getThing(1);
      expect(getOneThing).toEqual({ id: 1, name: "thing1" });
    });
  });

  describe("When it calls the method createThing", () => {
    test("Then it should return the value created", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ name: "thing2", week: 2 }),
      });

      const create = await repo.createThing({
        name: "thing2",
        week: 2,
        level: 3,
      });
      expect(create).toEqual({ name: "thing2", week: 2 });
    });
  });

  describe("When it calls the method update", () => {
    test("Then it should return the updated value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 2, name: "thing3" }),
      });

      const update = await repo.update({
        name: "thing3",
        week: 2,
        level: 3,
      });
      expect(update).toEqual({ id: 2, name: "thing3" });
    });
  });

  describe("When it calls the method delete", () => {
    test("Then it should call fetch with no return", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });

      const deleteThing = await repo.delete(2);
      expect(fetch).toHaveBeenCalled();
      expect(deleteThing).toBe(undefined);
    });
  });

  describe("When getThings method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const loadAll = repo.loadThings();
      await expect(loadAll).rejects.toThrow();
    });
  });

  describe("When getThing method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const getOneThing = repo.getThing(1);
      await expect(getOneThing).rejects.toThrow();
    });
  });

  describe("When create method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const create = repo.createThing({
        name: "thing3",
        week: 0,
        level: 0,
      });
      await expect(create).rejects.toThrow();
    });
  });

  describe("When update method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const update = repo.update({ name: "thing4" });
      await expect(update).rejects.toThrow();
    });
  });

  describe("When delete method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const deleteThing = repo.delete(1);
      await expect(deleteThing).rejects.toThrow();
    });
  });
});
