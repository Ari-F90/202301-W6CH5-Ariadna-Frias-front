import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { ThingApiRepo } from "../services/repository/thing.api.repo";
import * as ac from "../reducer/things.actions.creator";
import { ProtoThingStructure, ThingStructure } from "../models/thing";
export function useThings(repo: ThingApiRepo) {
  const things = useSelector((state: RootState) => state.things);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadThings = async () => {
      try {
        const data = await repo.loadThings();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadThings();
  }, [dispatch, repo]);

  const addThing = async (task: ProtoThingStructure) => {
    try {
      const finalThing = await repo.createThing(task);
      dispatch(ac.addCreator(finalThing));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateThing = async (thing: Partial<ThingStructure>) => {
    try {
      const finalThing = await repo.update(thing);
      dispatch(ac.updateCreator(finalThing));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteThing = async (id: ThingStructure["id"]) => {
    try {
      repo.delete(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    things,
    addThing,
    updateThing,
    deleteThing,
  };
}
