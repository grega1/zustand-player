import { configureStore } from "@reduxjs/toolkit";

import { player } from "./slices/playerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



export const store = configureStore({
    reducer:{
        player,
    },
})


export type RootState = ReturnType< typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch 