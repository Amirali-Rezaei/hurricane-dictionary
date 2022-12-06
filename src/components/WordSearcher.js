import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const WordSearcher = ({ favoriteWords, setFavoriteWords }) => {
	const [word, setWord] = useState("");
	const [result, setResult] = useState();

	const handleInput = (e) => {
		setWord(e.target.value);
	};

	const search = (e) => {
		e.preventDefault();
		axios
			.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then(function (response) {
				setResult(response.data[0]);
			})
			.catch(function (error) {
				toast.error("Word not found!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			});
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<Form>
				<Form.Group className="mb-2">
					<Form.Label>Type your desire</Form.Label>
					<Form.Control
						type="text"
						placeholder="What do you desire for?"
						onChange={handleInput}
					/>
				</Form.Group>
				<Button
					variant="primary"
					className="form-control"
					type="submit"
					name={"word"}
					onClick={search}
				>
					Search
				</Button>
			</Form>
			{result && (
				<SearchResult
					favoriteWords={favoriteWords}
					setFavoriteWords={setFavoriteWords}
					word={result.word}
					phonetics={result.phonetics[0].text}
					meaning={result.meanings[0].definitions[0].definition}
				/>
			)}
		</>
	);
};

export default WordSearcher;
