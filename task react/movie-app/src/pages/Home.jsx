import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import { useState } from "react";
import Counter from "../components/Counter";

function Home(props) {
	const [movies, setMovie] = useState(data);

	return (
		<>
			<div>
				<Hero></Hero>
				<Movies movies={movies} setMovie={setMovie}></Movies>
				<Form movies={movies} setMovie={setMovie}></Form>
			</div>
		</>
	);
	// return(
	// 	<Counter/>
	// )
}

export default Home;
