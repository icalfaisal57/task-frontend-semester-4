import axios from "axios";
import { useContext, useEffect} from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";
import MovieContext from "../../Context/MovieContext";

function PopularMovie() {
	const {setMovies} = useContext(MovieContext)
	useEffect(() => {
		getPopularMovies()
	}, []);
	async function getPopularMovies() {
		// Fetch data using axios
		const response = await axios(ENDPOINTS.POPULAR);
		setMovies(response.data.results);
	}
	return (
		<>
			<Hero></Hero>
			<Movies
				title={"Populer Movies"}></Movies>
		</>
	);
}

export default PopularMovie;
