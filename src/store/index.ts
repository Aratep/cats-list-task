import { AnyAction, configureStore, Action } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkDispatch, ThunkAction } from "redux-thunk";
import { useDispatch } from "react-redux"
import logger from "redux-logger";

// ROOT REDUCER
import { rootReducer } from "./root-reducer";

const middleware = [
    logger,
    thunkMiddleware
]

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === "development"
})

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;