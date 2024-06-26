import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledDetail from "./DetailMovie.styled";
import Button from "../ui/Button";
import { ENDPOINTS } from "../../utils/constants/endpoint";

function DetailMovie() {
	const param = useParams();
	const [movie, setMovie] = useState("");
	const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
	const trailer = movie && movie.videos.results[0].key;
	
	useEffect(() => {
		getDetailMovie();
	}, [param.id]);

	async function getDetailMovie() {
		// const API_KEY = import.meta.env.VITE_API_KEY;
		// const URL = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${API_KEY}&append_to_response=videos`;

		const response = await axios(ENDPOINTS.DETAILBYPARAM.replace("{id}",param.id));
		setMovie(response.data);
	}
	console.log(movie);
	return (
		<StyledDetail>
			<div className="container">
				<div className="poster">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
						alt={movie.title}
					/>
				</div>
				<div className="info">
					<h2>{movie.title}</h2>
					<h3>Genre: {genres}</h3>
					<p>{movie.overview}</p>
					<Button
						as="a"
						href={`https://www.youtube.com/watch?v=${trailer}`}
						$variant="primary"
						target="_blank"
						className="button">
						Watch Movie
					</Button>
				</div>
			</div>
		</StyledDetail>
	);
}

export default DetailMovie;
