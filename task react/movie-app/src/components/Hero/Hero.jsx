import  styles  from "./Hero.module.css";
function Hero() {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<div className={styles.hero__left}>
					<h2 className={styles.hero__title}>Spiderman</h2>
					<h3 className={styles.hero__genre}>Genre : Thriler, Drama, Action</h3>
					<p className={styles.hero__description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae
						nesciunt dolor quo quos eos, delectus sunt suscipit commodi
						possimus? Asperiores optio, exercitationem cum nostrum repellat
						assumenda tenetur cumque ad?
					</p>
					<button className={styles.hero__button}>Watch</button>
				</div>
				<div className={styles.hero__right}>
					<img
						className={styles.hero__image}
						src="https://picsum.photos/536/354"
						alt="ini gambar"
					/>
				</div>
			</section>
		</div>
	);
}

export default Hero