import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";

function Create({movies,setMovies}){
    return (
			<>
				<Hero></Hero>
				<Form movies={movies} setMovies={setMovies}></Form>
			</>
		);
}
export default Create;