import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const FavoriteWords = ({ favoriteWords, setFavoriteWords }) => {
	const deleteFavoriteWord = (favWord) => {
		setFavoriteWords((favoriteWords) =>
			favoriteWords.filter((val) => val.word !== favWord.word)
		);
	};
	return (
		<>
			{favoriteWords.length !== 0 ? (
				<Table striped bordered className="mt-2">
					<thead>
						<tr>
							<th>#</th>
							<th>Word</th>
							<th>Date Added</th>
							<th>Operations</th>
						</tr>
					</thead>
					<tbody>
						{favoriteWords &&
							favoriteWords.map((word, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{word.word}</td>
									<td>
										{new Date(word.date).toDateString()}
									</td>
									<td>
										<Button
											onClick={() =>
												deleteFavoriteWord(word)
											}
											variant="danger"
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
			) : (
				<h3 className="text-center mt-2">Add some words!</h3>
			)}
		</>
	);
};

export default FavoriteWords;
