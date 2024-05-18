import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Movies from "./components/Movies/Movies"
import Form from "./components/Form/Form"
import data from "./utils/constants/data"
import { useState } from "react"

function App(props) {
	const [movies, setMovie] = useState(data);

  return (
		<>
			<div>
				<Navbar></Navbar>
				<Hero></Hero>
				<Movies movies={movies} setMovie={setMovie}></Movies>
				<Form movies={movies} setMovie={setMovie}></Form>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App
