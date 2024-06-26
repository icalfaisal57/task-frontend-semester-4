import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import { ENDPOINTS } from "../../utils/constants/endpoint";

function Detail() {
	const params = useParams();
	const [movies, setMovies] = useState([]);
	const API_KEY = import.meta.env.VITE_API_KEY;
	useEffect(() => {
		getRecommendationMovies();
	}, [params.id]);
	async function getRecommendationMovies() {
		const response = await axios(
			ENDPOINTS.RECOMMENDATION.replace("{id}", params.id)
		);
		setMovies(response.data.results);
	}

	return (
		<>
			<DetailMovie />
			<Movies movies={movies} setMovies={setMovies} title={"Recommendation"}></Movies>
		</>
	);
}

export default Detail;
