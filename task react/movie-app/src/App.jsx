import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/Movie/Create";
import Search from "./pages/Movie/Search";
import Layout from "./components/Layout";

function App(props) {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/movie/create" element={<CreateMovie />}></Route>
					<Route path="/movie/search" element={<Search />}></Route>
				</Routes>
			</Layout>
		</>
	);
}

export default App;
