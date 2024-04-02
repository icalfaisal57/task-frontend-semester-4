import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<h2 className={styles.navbar__brand}>Movie App</h2>
				<ul className={styles.navbar__list}>
					<li className={styles.navbar__item}>home</li>
					<li className={styles.navbar__item}>home</li>
					<li className={styles.navbar__item}>home</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
