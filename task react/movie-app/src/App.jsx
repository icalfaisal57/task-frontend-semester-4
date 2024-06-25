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


function App(props) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Globalstyle />
				<Layout>
					<Routes>
						<Route path="/" element={<Home></Home>}></Route>
						<Route path="/movie/create" element={<CreateMovie />}></Route>
						<Route path="/movie/search" element={<Search />}></Route>
						<Route path="/movie/popular" element={<PopularMovie />}></Route>
						<Route path="/movie/toprated" element={<TopRated />}></Route>
						<Route path="/movie/nowplaying" element={<NowPlaying />}></Route>
						<Route path="/movie/:id" element={<Detail />}></Route>

					</Routes>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
