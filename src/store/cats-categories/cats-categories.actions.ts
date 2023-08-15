import { createAsyncThunk } from "@reduxjs/toolkit";

// API
import { catsApi } from "../../api";

export const fetchCatsCategories = createAsyncThunk("categories/fetch", async () => {
    const response = await catsApi.fetchCategories();
    return response.data
})