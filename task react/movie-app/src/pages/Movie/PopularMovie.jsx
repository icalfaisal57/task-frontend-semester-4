import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
	// Save API KEY and URL popular movie
	const API_KEY = import.meta.env.VITE_API_KEY;
	const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getPopularMovies()
	}, []);
	async function getPopularMovies() {
		// Fetch data using axios
		const response = await axios(URL);
		setMovies(response.data.results);
	}
	console.log(movies);
	return (
		<>
			<Hero></Hero>
			<Movies
				movies={movies}
				setMovies={setMovies}
				title={"Populer Movies"}></Movies>
		</>
	);
}

export default PopularMovie;
