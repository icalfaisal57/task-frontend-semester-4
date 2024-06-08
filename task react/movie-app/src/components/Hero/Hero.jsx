import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
	// Membuat state
	const [movie, setMovie] = useState("");

	useEffect(() => {
		async function fetchMovie() {
			const response = await fetch(
				"https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
			);
			const data = await response.json();
			console.log(data);

			setMovie(data);
		}
		fetchMovie();
	}, []);

	return (
		<StyledHero>
			<div className="container">
				<section className="hero">
					<div className="hero__left">
						<h2 className="hero__title">{movie.Title}</h2>
						<h3 className="hero__genre">{movie.Genre}</h3>
						<p className="hero__description">{movie.Plot}</p>
						<Button variant="primary">Watch Movie</Button>
					</div>
					<div className="hero__right">
						<img className="hero__image" src={movie.Poster} alt={movie.Title} />
					</div>
				</section>
			</div>
		</StyledHero>
	);
}

export default Hero;
