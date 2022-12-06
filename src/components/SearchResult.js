import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";

const SearchResult = ({
	favoriteWords,
	setFavoriteWords,
	word,
	phonetics,
	meaning,
}) => {
	const handleClick = () => {
		let isUnique = true;
		favoriteWords.forEach((favoriteWord) => {
			if (favoriteWord.word === word) {
				toast.warn("Word is already there!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
				isUnique = false;
				return;
			}
		});
		if (isUnique) {
			setFavoriteWords((previousWords) => [
				...previousWords,
				{ word: word, date: Date.now() },
			]);
			return;
		}
	};
	return (
		<div>
			<Card className="w-100 mt-2">
				<Card.Body>
					<Card.Title>
						{word}{" "}
						<span
							className="text-muted"
							style={{ fontSize: "16px" }}
						>
							{phonetics}
						</span>
					</Card.Title>
					<Card.Text>
						<span>Meaning: {meaning}</span>
					</Card.Text>
					<Card.Footer className="p-0 bg-transparent">
						<Button
							onClick={handleClick}
							variant="success"
							className="mt-2"
						>
							Add to favorites <AiFillHeart />
						</Button>
					</Card.Footer>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SearchResult;
