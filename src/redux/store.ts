import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/CounterSlice";
import logger from "./middleware/logger";

// import logger from "redux-logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
