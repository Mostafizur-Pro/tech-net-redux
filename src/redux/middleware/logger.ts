import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  //   console.log(store.getState());
  console.log("Currect State", store.getState());
  console.log("Action", action);
  next(action);
  console.log("Updated State", store.getState());
};

export default logger;
