import { createSlice } from "@reduxjs/toolkit";

// STORE
import { RootState } from "..";
import { fetchCatsCategories } from "./cats-categories.actions"

export interface ICategorie {
    id: number;
    name: string
}

interface ICategories {
    catsCategories?: Array<ICategorie>;
    isLoading?: boolean;
    error?: object
}

const initialState: ICategories = {
    catsCategories: [],
    isLoading: false,
    error: {}
}

export const catsCategoriesSlice = createSlice({
    name: "catsCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCatsCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCatsCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.catsCategories = action.payload
        })
        builder.addCase(fetchCatsCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export const catsCategoriesSelector = (state: RootState) => state.categories