import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { ENDPOINTS, getDetailEndpoint } from "../../utils/constants/endpoint";

function NowPlaying() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopularMovies();
	}, []);
	async function getPopularMovies() {
		const response = await axios(ENDPOINTS.NOWPLAYING);
		setMovies(response.data.results);
	}
	// console.log(movies);
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
