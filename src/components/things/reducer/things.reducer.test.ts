import { ThingStructure } from "../models/thing";
import {
  addCreator,
  deleteCreator,
  loadCreator,
  loadOneCreator,
  updateCreator,
} from "./things.actions.creator";
import { thingReducer } from "./things.reducer";

describe("Given the thing reducer", () => {
  describe("When we pass an empty action", () => {
    test("Then, it should return the initial state", () => {
      const initialState = [] as ThingStructure[];

      const action = { type: "" };

      const result = thingReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });

  describe("When we pass the load action", () => {
    test("Then, it should return the load things", () => {
      const result = thingReducer([], loadCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the loadOne action", () => {
    test("Then, it should return this one thing", () => {
      const result = thingReducer([], loadOneCreator);
      expect(result).toEqual([]);
    });
  });

  describe("When we pass the create action", () => {
    test("Then, it should return the new thing created", () => {
      const mockCreate: ThingStructure = {
        id: 2,
        name: "thing2",
        week: 2,
        level: 3,
      };
      const result = thingReducer([], addCreator(mockCreate));
      expect(result).toEqual([mockCreate]);
    });
  });

  describe("When we pass the update action", () => {
    test("Then, it should return the initial state", () => {
      const mockState = [
        {
          id: 1,
          name: "thing1",
          week: 6,
          level: 5,
        },
        {
          id: 3,
          name: "thing3",
          week: 6,
          level: 2,
        },
      ];
      const payload: ThingStructure = {
        id: 3,
        name: "thing3",
        week: 6,
        level: 2,
      };
      const result = thingReducer(mockState, updateCreator(payload));
      expect(result).toEqual(mockState);
    });
  });
  describe("When we delete an object", () => {
    test("Then it should delete this thing", () => {
      let result = thingReducer([], deleteCreator);
      expect(result).toEqual([]);
    });
  });
});
