import { useState } from "react";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import Alert from "../Alert/Alert";

function Form(props) {
	const { movies, setMovie } = props;
	const types = [
		{ type: "action", value: "action" },
		{ type: "drama", value: "drama" },
		{ type: "horror", value: "horror" },
		{ type: "comedy", value: "comedy" },
		{ type: "dll", value: "dll" },
	];
	//membuat state untuk refactor
	const [formData, setFormData] =  useState({
		title : "",
		date : "",
		type : "",
		gambar : "",
	})

	function handleChange(e){
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name] : value
		})
	}
	//handle error
	const [isTitleError, setTitleError] = useState(false);
	const [isDateError, setDateError] = useState(false);
	const [isTypeError, setTypeError] = useState(false);
	const [isLinkError, setLinkError] = useState(false);


	const {title,date,type,gambar}= formData;

	function validate(){
		if (title === "") {
			setTitleError(true);
			setTypeError(false);
			setLinkError(false);
			setDateError(false);
			return false;
		}
		else if(date === ""){
			setTitleError(false);
			setTypeError(false);
			setLinkError(false);
			setDateError(true);
			return false;
		}
		else if(type === ""){
			setTitleError(false);
			setDateError(false);
			setTypeError(true);
			setLinkError(false);
			return false;
		}
		else if(gambar === ""){
			setTitleError(false);
			setTypeError(false);
			setLinkError(true);
			setDateError(false);
			return false;
		}
		else{
			setTitleError(false);
			setDateError(false);
			setTypeError(false);
			setLinkError(false);
			return true
		}
	}
	function addMovie(){
				const newMovie = {
				id: uuidv4(),
				title: title,
				year: date,
				type: type,
				poster: gambar,
			};
			setMovie([...movies, newMovie]);
	}
	function resetForm(){
		setTitle("");
		setDate("");
		setType("");
		setGambar("");
	}

	function handleClick(e) {
		e.preventDefault();
		validate() && addMovie() && resetForm();
	}

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
				<form onSubmit={handleClick}>
					<div className={styles.right}>
						<div className={styles.form__form}>
							<div>
								<div className={styles.form__formHead}>
									<h1 id="control-1147078">Add Movie</h1>
								</div>
								<div className={styles.form__text}>
									<label className={styles.form__label} htmlFor="title-input">
										Title
									</label>
									<input
										className={styles.form__input}
										type="text"
										name="title"
										id="title-input"
										value={title}
										onChange={handleChange}
									/>
									<div className={styles.error}>
										{isTitleError && <Alert>Title wajib diisi</Alert>}
									</div>
								</div>
								<div className={styles.form__text}>
									<label className={styles.form__label} htmlFor="date-input">
										Date
									</label>
									<input
										className={styles.form__input}
										type="date"
										name="date"
										id="date-input"
										onChange={handleChange}
										value={date}
									/>
									<div className={styles.error}>
										{isDateError && <Alert>Date wajib diisi</Alert>}
									</div>
								</div>
								<div className={styles.form__text}>
									<label className={styles.form__label} htmlFor="genreSelect">
										Type
									</label>
									<select
										onChange={handleChange}
										name="type"
										id="genreSelect"
										className={styles.form__input}>
										<option value="">pilih genre</option>
										{types.map((type) => (
											<option key={type.value} value={type.value}>
												{type.type}
											</option>
										))}
									</select>
									<div className={styles.error}>
										{isTypeError && <Alert>Type wajib diisi</Alert>}
									</div>
								</div>
								<div className={styles.form__text}>
									<label className={styles.form__label} htmlFor="image-link">
										Link Gambar
									</label>
									<input
										onChange={handleChange}
										value={gambar}
										className={styles.form__input}
										type="text"
										name="gambar"
										id="image-link"
									/>
									<div className={styles.error}>
										{isLinkError && <Alert>Link wajib diisi</Alert>}
									</div>
								</div>
								<div>
									<button className={styles.form__button}>Submit</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
}
export default Form;
