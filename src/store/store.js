import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import Authentication from "./Authentication";
import Testimonial from "./Testimonial";
import User from "./User";

const reducers = combineReducers({
  Auth: Authentication,
  User: User,
  Testimonial: Testimonial,
});

const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
  whitelist: ["Auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
