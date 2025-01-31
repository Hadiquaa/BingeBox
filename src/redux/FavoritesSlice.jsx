import { createSlice } from "@reduxjs/toolkit";


export const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
      movies: [],
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.imdbID!== action.payload);
        }
    }
})

export const { addMovie, removeMovie } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;