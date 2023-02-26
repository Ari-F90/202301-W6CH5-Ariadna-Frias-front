import { configureStore } from "@reduxjs/toolkit";
import { thingReducer } from "../../feature/things/reducer/things.reducer";

export const store = configureStore({
  reducer: {
    things: thingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
