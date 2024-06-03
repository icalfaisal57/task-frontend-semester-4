import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { matchPath } from "react-router-dom";
function Hero() {
	//membuat state
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
	},[]);
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<div className={styles.hero__left}>
					<h2 className={styles.hero__title}>{movie.Title}</h2>
					<h3 className={styles.hero__genre}>{movie.Genre}</h3>
					<p className={styles.hero__description}>
						{movie.Plot}
					</p>
					<button className={styles.hero__button}>Watch</button>
				</div>
				<div className={styles.hero__right}>
					<img
						className={styles.hero__image}
						src={movie.Poster}
						alt={movie.Title}
					/>
				</div>
			</section>
		</div>
	);
}

export default Hero;
