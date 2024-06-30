import Movie from "../Movie/Movie";
import { useContext } from "react";
import MovieContext from "../../Context/MovieContext";
import StyledMovies from "./Movies.styled";
function Movies(props) {
	const { title = "Latest Movie" } = props;
	const { movies } = useContext(MovieContext)
	return (
		<StyledMovies>
			<div className="container">
				<section className="movies">
					<h2 className="movies__title">{title}</h2>
					<div className="movie__container">
						{movies.map((movie) => {
							return <Movie key={movie.id} movie={movie} />;
						})}
					</div>
				</section>
			</div>
		</StyledMovies>
	);
}
export default Movies;
