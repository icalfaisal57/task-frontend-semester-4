import styles from "./Form.module.css";
function Form() {
	return (
		<div className={styles.container}>
			<section className={styles.form}>
				<div className={styles.form__left}>
					<img
						className={styles.form__image}
						src="https://picsum.photos/536/354"
						alt="ini gambar"
					/>
				</div>
				<div className={styles.right}>
					<div className={styles.form__form}>
						<div>
							<div className={styles.form__formHead}>
								<h1 access="false" id="control-1147078">
									Add Movie
								</h1>
							</div>
							<div className={styles.form__text}>
								<label
									className={styles.form__label}
									htmlFor="text-1711965519234">
									Title
								</label>
								<input
									className={styles.form__input}
									type="text"
									name="text-1711965519234"
									access="false"
									id="text-1711965519234"
								/>
							</div>
							<div className={styles.form__text}>
								<label
									className={styles.form__label}
									htmlFor="text-1711965525843">
									Date
								</label>
								<input
									className={styles.form__input}
									type="text"
									name="text-1711965525843"
									access="false"
									id="text-1711965525843"
								/>
							</div>
							<div>
								<button className={styles.form__button}>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Form;
