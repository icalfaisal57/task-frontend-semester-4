import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

//buat slice untuk generate action dan reducer
// menerima param Object: name, initialState, reducers  
const movieSlice = createSlice({
    name: "Movies slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state,action) {
            state.movies.push(action.payload)
        },
        deleteMovie() {},
    },
});

//generate action dan reducers
const moviesReducer = movieSlice.reducer;
const { addMovie, deleteMovie } = movieSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovie };
