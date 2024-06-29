//import configure store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";
//buatstore
const store = configureStore({
    reducer:{
        movies: moviesReducer,
    }
})

export default store;