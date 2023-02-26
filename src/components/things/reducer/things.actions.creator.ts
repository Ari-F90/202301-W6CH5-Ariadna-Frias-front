import { createAction } from "@reduxjs/toolkit";
import { thingsActions } from "./things.actions.types";
import { ThingStructure } from "../models/thing";

export const loadCreator = createAction<ThingStructure[]>(thingsActions.load);
export const loadOneCreator = createAction<ThingStructure>(
  thingsActions.loadOne
);
export const addCreator = createAction<ThingStructure>(thingsActions.add);
export const updateCreator = createAction<ThingStructure>(thingsActions.update);
export const deleteCreator = createAction<ThingStructure["id"]>(
  thingsActions.delete
);
