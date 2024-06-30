import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/Movie/Create";
import Search from "./pages/Movie/Search";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Globalstyle from "./components/Globalstyle";
import PopularMovie from "./pages/Movie/PopularMovie";
import TopRated from "./pages/Movie/TopRated";
import NowPlaying from "./pages/Movie/NowPlaying";
import Detail from "./pages/Movie/Detail";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MovieContext from "./Context/MovieContext";
import { useState } from "react";
import data from "./utils/constants/data";


function App(props) {
	const [movies, setMovies] = useState(data)

	const contextValue = {
		movies,setMovies,
	};
	return (
		<HelmetProvider>
			<>
				<ThemeProvider theme={theme}>
					<MovieContext.Provider value={contextValue}>
						<Helmet>
							<link
								href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
								rel="stylesheet"
							/>
						</Helmet>
						<Globalstyle />
						<Layout>
							<Routes>
								<Route path="/" element={<Home></Home>}></Route>
								<Route path="/movie/create" element={<CreateMovie />}></Route>
								<Route path="/movie/search" element={<Search />}></Route>
								<Route path="/movie/popular" element={<PopularMovie />}></Route>
								<Route path="/movie/toprated" element={<TopRated />}></Route>
								<Route
									path="/movie/nowplaying"
									element={<NowPlaying />}></Route>
								<Route path="/movie/:id" element={<Detail />}></Route>
							</Routes>
						</Layout>
					</MovieContext.Provider>
				</ThemeProvider>
			</>
		</HelmetProvider>
	);
}

export default App;
