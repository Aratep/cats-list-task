import { createAsyncThunk } from "@reduxjs/toolkit";

// STORE
import { AppThunk } from "..";
import { loadMoreCatsReducer } from "./cats-list.slice";
// API
import { catsApi } from "../../api";

export const fetchCatsList = createAsyncThunk("fetch/cats", async ({page, catId}:{page: number, catId: any}) => {
    const response = await catsApi.fetchCats(page, catId);
    return response.data;
})

export const loadMoreCats =
  (page: number, catId: any): AppThunk =>
   async dispatch => {
    const response = await catsApi.fetchCats(page, catId);
    dispatch(loadMoreCatsReducer({cats: response.data}))
  };
