import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
	return (
		<StyledNavbar>
			<div className="container">
				<nav className="navbar">
					<h2 className="navbar__brand">Movie App</h2>
					<ul className="navbar__list">
						<li className="navbar__item">
							<Link className="Navbar__link" to="/">
								Home
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="Navbar__link" to="/movie/create">
								Add Movie
							</Link>
						</li>
						<li className="navbar__item">
							<Link className="Navbar__link" to="/movie/search">
								Search
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</StyledNavbar>
	);
}

export default Navbar;
