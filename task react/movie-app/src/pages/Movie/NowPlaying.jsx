import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import axios from "axios";

function NowPlaying() {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const URL = `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${API_KEY}`;
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopularMovies();
	}, []);
	async function getPopularMovies() {
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
				title={"Now Playing"}></Movies>
		</>
	);
}
export default NowPlaying;
