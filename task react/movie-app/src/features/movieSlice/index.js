import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// Create slice to generate action and reducer
const movieSlice = createSlice({
    name: "Movies slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        deleteMovie() {},
        updateMovie(state, action) { // Correct order of parameters
            state.movies.push(...action.payload); // Assuming you want to add an array of movies
        }
    },
});

// Generate action and reducers
const moviesReducer = movieSlice.reducer;
const { addMovie, deleteMovie, updateMovie } = movieSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovie, updateMovie };
