import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";

export const store = configureStore({ reducer });
export type TStore = ReturnType<typeof store.getState>;