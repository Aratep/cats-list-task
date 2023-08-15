import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// STORE
import { RootState } from "..";
// ACTIONS
import { fetchCatsList } from "../cats-list/cats-list.actions"

export interface ICat {
    id: string;
    url: string;
}

interface ICats {
    cats?: Array<ICat>;
    isLoading?: boolean;
    error?: object
}

const initialState: ICats = {
    cats: [],
    isLoading: false,
    error: {}
}

export const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        loadMoreCatsReducer: (state, { payload }: PayloadAction<any>) => {
            state.cats = state.cats?.concat(payload.cats);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCatsList.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCatsList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cats = action.payload
            
        })
        builder.addCase(fetchCatsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export const { loadMoreCatsReducer } = catsSlice.actions;

export const catsSelector = (state: RootState) => state.cats