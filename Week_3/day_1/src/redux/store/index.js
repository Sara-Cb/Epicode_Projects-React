import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import fetchReducer from "../reducers/fetch";

const allReducers = combineReducers({
  favourite: favouriteReducer,
  fetch: fetchReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
