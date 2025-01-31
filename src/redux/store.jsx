import { configureStore } from "@reduxjs/toolkit";
import { FavoritesSlice } from "./FavoritesSlice";


export const store = configureStore({
    reducer : {
        favorites : FavoritesSlice.reducer,
    }
})