import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { useContext } from "react";
import MovieContext from "../../Context/MovieContext";
function Movies(props) {
	const { title = "Latest Movie" } = props;
	const { movies } = useContext(MovieContext)
	return (
		<div className={styles.container}>
			<section className={styles.movies}>
				<h2 className={styles.movies__title}>{title}</h2>
				<div className={styles.movie__container}>
					{movies.map((movie) => {
						return <Movie key={movie.id} movie={movie} />;
					})}
				</div>
			</section>
		</div>
	);
}
export default Movies;
