import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home() {

	return (
		<>
			<div>
				<Hero></Hero>
				<Movies title={"Latest Movies"}></Movies>
			</div>
		</>
	);
	// return(
	// 	<Counter/>
	// )
}

export default Home;
