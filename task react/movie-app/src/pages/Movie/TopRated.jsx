import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { ENDPOINTS } from "../../utils/constants/endpoint";

function TopRated() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopularMovies();
	}, []);
	async function getPopularMovies() {
		const response = await axios(ENDPOINTS.TOPRATED);
		setMovies(response.data.results);
	}
	console.log(movies);
	return (
		<>
			<Hero></Hero>
			<Movies
				movies={movies}
				setMovies={setMovies}
				title={"Top Rated Movies"}></Movies>
		</>
	);
}
export default TopRated;
