import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../Context/MovieContext";
import StyledForm from "./Form.styled";

function Form() {
	const {movies, setMovies} = useContext(MovieContext)
	//buat dispatch 

	//buat navigasi
	const navigation = useNavigate();

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
	const [isFormError, setFormError] = useState({
		isTitleError : false,
		isDateError : false,
		isTypeError : false,
		isLinkError : false,
	});
	const {isTitleError, isDateError,isTypeError,isLinkError} = isFormError;
	const {title,date,type,gambar}= formData;

	function validate(){
		if (title === "") {
			setFormError({
				isTitleError : true,
				isDateError : false,
				isTypeError : false,
				isLinkError : false,
			})
			return false;
		}
		else if(date === ""){
			setFormError({
				isTitleError: false,
				isDateError: true,
				isTypeError: false,
				isLinkError: false,
			});
			return false;
		}
		else if(type === ""){
			setFormError({
				isTitleError: false,
				isDateError: false,
				isTypeError: true,
				isLinkError: false,
			});
			return false;
		}
		else if(gambar === ""){
			setFormError({
				isTitleError: false,
				isDateError: false,
				isTypeError: false,
				isLinkError: true,
			});
			return false;
		}
		else{
			setFormError({
				...isFormError
			})
			return true
		}
	}
	function submitMovie(){
				const newMovie = {
				id: uuidv4(),
				title: title,
				year: date,
				type: type,
				poster: gambar,
			};
			setMovies([...movies, newMovie])

			navigation("/")
	}
	function resetForm(){
		setTitle("");
		setDate("");
		setType("");
		setGambar("");
	}

	function handleClick(e) {
		e.preventDefault();
		validate() && submitMovie() && resetForm();
	}

	return (
		<StyledForm>
			<div className="container">
				<section className="form">
					<div className="form__left">
						<img
							className="form__image"
							src="https://picsum.photos/536/354"
							alt="ini gambar"
						/>
					</div>
					<form onSubmit={handleClick}>
						<div className="right">
							<div className="form__form">
								<div>
									<div className="form__formHead">
										<h1 id="control-1147078">Add Movie</h1>
									</div>
									<div className="form__text">
										<label className="form__label" htmlFor="title-input">
											Title
										</label>
										<input
											className="form__input"
											type="text"
											name="title"
											id="title-input"
											value={title}
											onChange={handleChange}
										/>
										<div className="error">
											{isTitleError && <Alert>Title wajib diisi</Alert>}
										</div>
									</div>
									<div className="form__text">
										<label className="form__label" htmlFor="date-input">
											Date
										</label>
										<input
											className="form__input"
											type="date"
											name="date"
											id="date-input"
											onChange={handleChange}
											value={date}
										/>
										<div className="error">
											{isDateError && <Alert>Date wajib diisi</Alert>}
										</div>
									</div>
									<div className="form__text">
										<label className="form__label" htmlFor="genreSelect">
											Type
										</label>
										<select
											onChange={handleChange}
											name="type"
											id="genreSelect"
											className="form__input">
											<option value="">pilih genre</option>
											{types.map((type) => (
												<option key={type.value} value={type.value}>
													{type.type}
												</option>
											))}
										</select>
										<div className="error">
											{isTypeError && <Alert>Type wajib diisi</Alert>}
										</div>
									</div>
									<div className="form__text">
										<label className="form__label" htmlFor="image-link">
											Link Gambar
										</label>
										<input
											onChange={handleChange}
											value={gambar}
											className="form__input"
											type="text"
											name="gambar"
											id="image-link"
										/>
										<div className="error">
											{isLinkError && <Alert>Link wajib diisi</Alert>}
										</div>
									</div>
									<div>
										<Button $variant="secondary" $full={true} size="lg">
											Submit
										</Button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</section>
			</div>
		</StyledForm>
	);
}
export default Form;
