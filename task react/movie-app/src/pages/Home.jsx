import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";
import { useState } from "react";

function Home({movies}) {

	return (
		<>
			<div>
				<Hero></Hero>
				<Movies movies={movies} title={"Latest Movies"}></Movies>
			</div>
		</>
	);
	// return(
	// 	<Counter/>
	// )
}

export default Home;
