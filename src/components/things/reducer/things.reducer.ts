import { createReducer } from "@reduxjs/toolkit";
import { ThingStructure } from "../models/thing";
import * as ac from "./things.actions.creator";

const initialState: ThingStructure[] = [];

export const thingReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadOneCreator, (state, { payload }) =>
    state.filter((item) => item.id === payload.id)
  );

  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );
  builder.addDefaultCase((state) => state);
});
