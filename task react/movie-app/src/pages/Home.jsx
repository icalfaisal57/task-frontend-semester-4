import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import { useState } from "react";
import Counter from "../components/Counter";

function Home(props) {
	const [movies, setMovies] = useState(data);

	return (
		<>
			<div>
				<Hero></Hero>
				<Movies movies={movies} setMovies={setMovies} title={"Latest Movies"}></Movies>
				<Form movies={movies} setMovies={setMovies}></Form>
			</div>
		</>
	);
	// return(
	// 	<Counter/>
	// )
}

export default Home;
