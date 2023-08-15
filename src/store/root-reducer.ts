import { combineReducers } from "@reduxjs/toolkit";

// SLICES
import { catsCategoriesSlice } from "./cats-categories/cast-categories.slice";
import { catsSlice } from "./cats-list/cats-list.slice"

export const rootReducer = combineReducers({
    categories: catsCategoriesSlice.reducer,
    cats: catsSlice.reducer
})