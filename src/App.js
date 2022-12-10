import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WordSearcher from "./components/WordSearcher";
import { useEffect, useState } from "react";
import FavoriteWords from "./components/FavoriteWords";

function App() {
	const [favoriteWords, setFavoriteWords] = useState(
		JSON.parse(localStorage.getItem("favoriteWords")) || []
	);

	useEffect(() => {
		localStorage.setItem("favoriteWords", JSON.stringify(favoriteWords));
	}, [favoriteWords]);

	return (
		<div className="App container mt-5 d-flex align-items-center justify-content-center flex-column">
			<div className="w-75">
				<h1 className="text-center">Dictionary</h1>
				<WordSearcher
					favoriteWords={favoriteWords}
					setFavoriteWords={setFavoriteWords}
				/>
				<FavoriteWords
					favoriteWords={favoriteWords}
					setFavoriteWords={setFavoriteWords}
				/>
				<div className="text-center">
					<img
						src="https://www.mehr8.ir/wp-content/uploads/2018/11/Mehre8-01.png"
						alt="logo"
						className="mt-5 w-25 text-center"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
