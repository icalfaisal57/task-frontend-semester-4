import { useContext, useEffect} from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import { ENDPOINTS, getDetailEndpoint } from "../../utils/constants/endpoint";
import MovieContext from "../../Context/MovieContext";

function NowPlaying() {
	const { setMovies} = useContext(MovieContext);

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
				title={"Now Playing"}></Movies>
		</>
	);
}
export default NowPlaying;
