import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { ENDPOINTS, getDetailEndpoint } from "../../utils/constants/endpoint";

function PopularMovie() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getPopularMovies()
	}, []);
	async function getPopularMovies() {
		// Fetch data using axios
		const response = await axios(ENDPOINTS.POPULAR);
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
