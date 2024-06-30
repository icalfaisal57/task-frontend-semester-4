import { useContext, useEffect} from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import ENDPOINTS  from "../../utils/constants/endpoint";
import MovieContext from "../../Context/MovieContext";

function TopRated() {
	const {setMovies} = useContext(MovieContext);

	useEffect(() => {
		getPopularMovies();
	}, []);
	async function getPopularMovies() {
		const response = await axios(ENDPOINTS.TOPRATED);
		setMovies(response.data.results);
	}
	return (
		<>
			<Hero></Hero>
			<Movies
				title={"Top Rated Movies"}></Movies>
		</>
	);
}
export default TopRated;
