import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";

function Hero() {
	// Membuat state
	const [movie, setMovie] = useState("");
	const API_KEY = import.meta.env.VITE_API_KEY;
	const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
	const trailer = movie && movie.videos.results[0].key;

	useEffect(() => {
		async function getTrendingMovie() {
			const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
			const response = await axios(URL);
			console.log(response.data.results[0]);
			return response.data.results[0];
		}
		//mendapatkan detail movie
		async function getDetailMovie() {
			const trendingMovie = await getTrendingMovie();
			const id = trendingMovie.id;
			const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
			const response = await axios(URL);
			console.log(response.data);
			setMovie(response.data);
		}
		getDetailMovie();
	}, []);

	return (
		<StyledHero>
			<div className="container">
				<section className="hero">
					<div className="hero__left">
						<h2 className="hero__title">{movie.title}</h2>
						<h3 className="hero__genre">{genres}</h3>
						<p className="hero__description">{movie.overview}</p>
						<Button
							as="a"
							href={`https://www.youtube.com/watch?v=${trailer}`}
							variant="primary" target="_blank" className="hero__button">
							Watch Movie
						</Button>
					</div>
					<div className="hero__right">
						<img
							className="hero__image"
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.Title}
						/>
					</div>
				</section>
			</div>
		</StyledHero>
	);
}

export default Hero;
